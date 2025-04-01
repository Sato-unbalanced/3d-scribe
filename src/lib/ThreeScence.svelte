
<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
  import { OrbitControls} from 'three/addons/controls/OrbitControls.js';
  import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { PUBLIC_BACKEND_WEBSITE_URL } from "$env/static/public";

  let user_id;

  let object;
  let prev_object;
  let prev_mesh = [];
  let new_material;
  async function func(event)
  {
        event.preventDefault();
        const requestOptions = {
                method: "GET",
                redirect: "follow"
        };
        try{
            const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/models", requestOptions);
            const result = await response.text();
            //console.log(result);
            object = JSON.parse(result);
            //console.log(object);
        }
        catch (error){
            console.error(error)
        }    
    }
  async function get_url(project_id)
  {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    try{
      const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/url/" + project_id, requestOptions );
      const result = await response.text();
      return JSON.parse(result)[0]["url"];
    }
    catch(error){
      console.error("Error from presigned_url: " + error)
    }
    

  }
  let container;
  let objLoader1;
  let glbLoader;
  let labelRenderer;
  let scene;
  let camera;
  onMount(() => {
    // Scene
    scene = new THREE.Scene();
    scene.background = null;

    document.getElementById("selectColor").addEventListener("input", function(event){
      console.log("Color change: ", event.target.value);
      scene.background = new THREE.Color(event.target.value);
    });

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;
    camera.layers.enableAll();
  
    // Renderer
    const renderer = new THREE.WebGLRenderer();//({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight*0.9);
    container.appendChild(renderer.domElement);

    //orbital controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0,20,100);
    controls.update();

    // AmbientLight 
    const color = 0xFFFFFF;
    const intensity = 0.25;
    const ambient_light = new THREE.AmbientLight(color, intensity);
    scene.add(ambient_light);  
      
    // top Light 
    const top_light = new THREE.DirectionalLight(0xffffff, 1); 
    top_light.position.set(0, 1, 1).normalize(); 
    scene.add(top_light); 

    //attempt to add annotatios take two
    const objectDiv = document.createElement('div');
    objectDiv.className = 'label';
    objectDiv.textContent = "Earth";
    objectDiv.style.backgroundColor = 'transparent';
      
    const objectLabel = new CSS2DObject(objectDiv);
    objectLabel.position.set(1.5 * 7,0 ,0 );
    objectLabel.center.set(0, 1);
    objectLabel.layers.set(0);
      
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight*0.9);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.pointerEvents = 'none';
    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement);

    objLoader1 = new OBJLoader();
    glbLoader = new GLTFLoader();

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.onload = function (e){
            const contents = e.target.result;
            const objFile = new Blob([contents], {type:"application/octet-stream"});
            const url = URL.createObjectURL(objFile);
            //localStorage.setItem('objModelUrl', url);
            //console.log("trying to save value of model to local storage", url);
            loadModel(url);
            };
          reader.readAsArrayBuffer(file);
        }
      });

      const helperSecene = new THREE.Scene();
      const helperCamera = new THREE.OrthographicCamera(-1,1,1,-1,0,10);

      const axesHelper = new THREE.AxesHelper(1);
      helperSecene.add(axesHelper);
      axesHelper.position.set( 0 , 0 ,0);
      helperCamera.position.set(0,0,5);
      helperCamera.lookAt(axesHelper.position);
    // Animation loop 
    const animate = function () { 
        requestAnimationFrame(animate); 
        controls.update();
        renderer.clear();
        renderer.render(scene, camera); 
        labelRenderer.render(scene, camera);
        
        //renderer.clearDepth();
        //renderer.render(helperSecene, helperCamera);
      }; 

      animate(); 
      // Handle window resize 
      window.addEventListener('resize', () => { 
        camera.aspect = window.innerWidth / window.innerHeight; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth, window.innerHeight*0.9); 
        labelRenderer.setSize(window.innerWidth, window.innerHeight*0.9);
        helperCamera.left = -1 * window.innerWidth/ window.innerHeight;
      });
  
        //console.log("Page was reloaded");
        const savedUrl = localStorage.getItem('objModelUrl');
        //console.log(savedUrl);
        if (savedUrl) {
          //console.log("Trying to load the file that was saved locally");
          loadModel(savedUrl);
        } else {
         // console.log("No saved file found in localStorage");
        }
    });  

    let user_btn_press = 0;
    let user_content;
    function user_visible()
    {
      user_content = document.getElementById('user_files');
      if(user_btn_press % 2 == 0)
      {
        user_content.style.display = "none";
      }
      else{
        user_content.style.display = "inline";
      }
      user_btn_press ++;
    };

    let tag_btn_press = 1;
    let tag_content;
    function tag_visible()
    {
      tag_content = document.getElementById('tag_modify');
      if(tag_btn_press % 2 == 0)
      {
        tag_content.style.display = "none";
      }
      else{
        tag_content.style.display = "block";
      }
      tag_btn_press ++;
    };
    function loadModel(url){
      objLoader1.load(url, object =>{
        scene.add(object); 
        removeObject();
        new_material = new THREE.MeshNormalMaterial({wireframe: true});
        object.traverse((child) =>{
          if(child.isMesh ) prev_mesh.push(child.material);
        });
        prev_object = object;
        //object.add(objectLabel);

        const boundingBox = new THREE.Box3().setFromObject(object);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());

        const cameraDistance = Math.max(size.x, size.y, size.z) * 0.75;

        camera.position.set(center.x, center.y, center.z + cameraDistance);
        camera.lookAt(center);

        URL.revokeObjectURL(url);
      });
    }
    function add_annotation()
    {
      let annoation_text = document.getElementById('annotation');
      let text = annoation_text.value;
      //attempt to add annotatios take two
      const objectDiv = document.createElement('div');
      objectDiv.className = 'label';
      objectDiv.textContent = text;
      objectDiv.style.backgroundColor = 'transparent';

      //set position of text
      const label_1 = new CSS2DObject(objectDiv);
      label_1.position.set(1.5 * 7,0 ,0 );
      label_1.center.set(0, 1);
      label_1.layers.set(0);
      
      prev_object.add(label_1);
    }

    function updateAxesHelperPosition()
    {
      // Position and size for the helper
    // This places it in the bottom-left corner with appropriate sizing
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.15; // 15% of the smallest dimension
    
    renderer.helperCamera.left = -size / 2;
    renderer.helperCamera.right = size / 2;
    renderer.helperCamera.top = size / 2;
    renderer.helperCamera.bottom = -size / 2;
    renderer.helperCamera.updateProjectionMatrix();
    
    // Match the cube's rotation if desired
    // Comment this out if you want fixed world axes instead
    axesHelper.rotation.copy(prev_object.rotation);
    }

    onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user_id = user.uid || 'Guest';
        load_files();
        // Place additional dependent code here
      } else {
        console.log('No user signed in.');
      }
    });
    
  });
  async function load_url(project_id)
  {
    const presigned_url = await get_url(project_id);
    loadModel(presigned_url);
    //save to local storage
    localStorage.setItem('objModelUrl', presigned_url);
    console.log("trying to save value of model to local storage", presigned_url);
  }
  //trying to remove object from the scene
  function removeObject()
    {
      if(prev_object) 
      {
        scene.remove(prev_object);
      }
      prev_object= null;
      prev_mesh = [];
      let mesh_to_wireframe = document.getElementById("reverse_mesh");
      mesh_to_wireframe.checked = false;
    }

  let button_names= [];
  async function load_files()
  {
    const requestOptions = {
                method: "GET",
                redirect: "follow"
        };
        try{
            const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/model/names/"+ user_id, requestOptions);
            const result = await response.text();
            button_names = JSON.parse(result);
        }
        catch (error){
            console.error(error)
        }
  }

  //function to return the original mesh to the object
  function original_mesh()
  {
    let i = 0;
    prev_object.traverse((child) =>{
      if(child.isMesh)child.material = prev_mesh[i++];
    });
  }
  function wire_frame()
  {
    prev_object.traverse((child) =>{
      if(child.isMesh) child.material = new_material;
    });
  }
  function reverse_mesh()
  {
    let mesh_to_wireframe = document.getElementById("reverse_mesh");
    if(mesh_to_wireframe.checked == true) wire_frame();
    else original_mesh();
  }
  //let text_area = document.getElementById("annotation");
  //text_area.addEventListener("input", add_annotation);
</script>


<style>
  div{
    width: 100%;
    height: 90%;
    padding: 0;
    margin: 0;
  }
  .label{
    z-index: 10;
  }

  .overlay{
    pointer-events: none;
    position: absolute;
    height: 90%;
    width: 100%;
    z-index: 12;
  }
  #userFiles{
    pointer-events:all;
    display: grid;
    grid-template-columns: auto auto;
    float: left;
    width: auto;
    height: 100%;
    background-color: #343434;
  }
  #tag_config{
    pointer-events:all;
    display: grid;
    grid-template-columns: auto auto;
    float: right;
    width: auto;
    height: 100%;
    background-color: #343434; 
  }
  .btn{
    font-size: 20px;
    background-color: #212122;
    color: whitesmoke;
    border: none;
    padding-top: 0.5rem;
  }
  #tag_modify
  {
    display: none;
  }
  .btn_model:hover
  {
    background-color: lightskyblue;
  }
  .btn_model{
    background-color: #212122;
    border: none;
    width: 15em;
    font-size: 1em;
  }  
</style>
<div class="overlay">
  <div id="userFiles">
    <div id = "user_files">
      <table id = "user_files_table">
        <caption>Models:</caption>
        {#if button_names.length === 0}
        <p>Loading...</p>
        {:else}
          {#each button_names as button}
          <tr>
            <button
              style="width: 150px; border: none; font-size: 1em;"
              on:click={() => load_url(button.project_id)}>
              {button.model_name}
            </button> 
          </tr>
          {/each}
        {/if}
      </table>
    </div>
    <button on:click={user_visible} class="btn" id="user_btn">
      <i class="fa fa-folder"></i>
    </button>
  </div>
  <div id="tag_config">
    <button on:click={tag_visible} class="btn" id="folder_btn">
      <i class="fa fa-bars"></i>
    </button>
    <div id = "tag_modify">
      <p>Input annotation here</p>
      <textarea id="annotation" name= "input_value" rows="5" cols="50"
      placeholder="Enter annotation here ..." on:input={add_annotation}></textarea>
      <div style="width:fit-content; height:fit-content">
        <label for="reverse_mesh">View wireframe: </label>
        <input type='checkbox'id="reverse_mesh" on:click={reverse_mesh}> 
      </div>
      <div style="height:fit-content; padding: 20px 0px;">
        <label for="annotation_color">Font color:
          <input type="text" id="annotation_color">
        </label>
      </div>
      <div style="height:fit-content; padding: 20px 0px;">
        <label for="annotation_size">Font size:
          <input type="text" id="annotation_size">
        </label> 
      </div>
        
      
    </div>
  </div>
</div>
<div bind:this={container}></div>




