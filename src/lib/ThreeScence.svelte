
<script>
  export let width_scale = 1;
  export let height_scale = 0.9;
  $:{
  }

  import { onMount } from "svelte";
  import {onDestroy} from "svelte";
  import * as THREE from "three";
  import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
  import { OrbitControls} from 'three/addons/controls/OrbitControls.js';
  import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { PUBLIC_BACKEND_WEBSITE_URL } from "$env/static/public";
  import {sharedValue} from "./store.js"
    import { json, redirect } from "@sveltejs/kit";
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
            object = JSON.parse(result);
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
  let labelRenderer;
  let scene;
  let camera;
  let axesHelper;
  onMount(() => {
    // Scene
    scene = new THREE.Scene();
    scene.background = null;

    document.getElementById("selectColor").addEventListener("input", function(event){
      scene.background = new THREE.Color(event.target.value);
    });

    // Camera
    camera = new THREE.PerspectiveCamera(75, (window.innerWidth * width_scale)/ (window.innerHeight* height_scale), 1, 1000);
    camera.position.z = 5;
    camera.layers.enableAll();
  
    // Renderer
    const renderer = new THREE.WebGLRenderer();//({alpha: true});
    renderer.setSize((window.innerWidth * width_scale), (window.innerHeight*height_scale));
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
    objectLabel.center.set(0, 0);
    objectLabel.layers.set(0);
      
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth * width_scale, window.innerHeight* height_scale);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.pointerEvents = 'none';
    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement);

    objLoader1 = new OBJLoader();

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.onload = function (e){
            const contents = e.target.result;
            const objFile = new Blob([contents], {type:"application/octet-stream"});
            const url = URL.createObjectURL(objFile);
            //removeObject();
            if($sharedValue == "")
            {
              removeObject();
            }
            loadModel(url);
            };
          reader.readAsArrayBuffer(file);
        }
      });

      const helperSecene = new THREE.Scene();
      const helperCamera = new THREE.OrthographicCamera(
        -window.innerWidth / 2, window.innerWidth / 2, // Left, Right
        (window.innerHeight * 0.9) / 2, -(window.innerHeight*0.9) / 2, // Top, Bottom
        0.1, 1000 // Near, Far
      );

      axesHelper = new THREE.AxesHelper(50);
      helperSecene.add(axesHelper);
      axesHelper.position.set( 0 , 0 ,0);
      helperCamera.position.z = 100;
      axesHelper.position.set((window.innerWidth * width_scale) / 2 - 100, -(window.innerHeight* height_scale) / 2 + 100, 0); // Adjust offsets
      

      // Animation loop 
      const animate = function () { 
        requestAnimationFrame(animate); 
        controls.update();
        renderer.clear();
        renderer.render(scene, camera); 
        labelRenderer.render(scene, camera);

        //axesHelper.rotation.copy(object.rotation);
        copy_rotation();
        renderer.autoClear = false;
        renderer.clearDepth();
        renderer.render(helperSecene, helperCamera);
      }; 

      animate(); 
      // Handle window resize 
      window.addEventListener('resize', () => { 
        camera.aspect = (window.innerWidth* width_scale) / (window.innerHeight *height_scale); 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth *width_scale, window.innerHeight* height_scale); 
        labelRenderer.setSize(window.innerWidth *width_scale, window.innerHeight*height_scale);
        //helperCamera.left = -1 * window.innerWidth/ window.innerHeight;
        
        helperCamera.left = -(window.innerWidth * width_scale)/ 2;
        helperCamera.right = (window.innerWidth * width_scale)/ 2;
        helperCamera.top = (window.innerHeight * height_scale) / 2;
        helperCamera.bottom = -(window.innerHeight * height_scale) / 2;
        helperCamera.updateProjectionMatrix();

        // line.geometry.setFromPoints(clickedPoint, label_1.position);

        // Reposition the AxesHelper
        axesHelper.position.set((window.innerWidth *width_scale)/ 2 - 100, -(window.innerHeight * height_scale) / 2 + 100, 0);
      });
  
        //console.log("Page was reloaded");
        const savedUrl = localStorage.getItem('objModelUrl');
        const saved_project_id =localStorage.getItem('project_id');
        //console.log(savedUrl);
        if (savedUrl) {
          //console.log("Trying to load the file that was saved locally");
          loadModel(savedUrl);
          load_project_annotations(saved_project_id);
          sharedValue.set(saved_project_id);
        } else {
         // console.log("No saved file found in localStorage");
        }

        const mouse = new THREE.Vector2();
        let raycaster = new THREE.Raycaster();

        window.addEventListener("click", (event)=>{
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
          raycaster.setFromCamera(mouse, camera);

          if(prev_object)
          {
            const intersects = raycaster.intersectObjects(prev_object.children, true);
            if(intersects.length > 0)
            {
              const clickedPoint = intersects[0].point;
              const material = new THREE.LineBasicMaterial({color: 0x0000ff});
              let x_position = document.getElementById("x_position");
              let y_position = document.getElementById("y_position");
              let z_position = document.getElementById("z_position");

              x_position.value = clickedPoint.getComponent(0);
              y_position.value = clickedPoint.getComponent(1);
              z_position.value = clickedPoint.getComponent(2);
            }
          }
        });

        
    });  
    onDestroy(() =>{
      remove_all_anotations();
    });

    let user_btn_press = 0;
    let user_content;
    function user_visible()
    {
      user_content = document.getElementById('user_files');
      user_content.style.display = (user_btn_press % 2 == 0) ? "none" : "inline";
      user_btn_press ++;
    };

    function copy_rotation()
    {
      if(prev_object){
        axesHelper.rotation.copy(camera.rotation);
      }
    }
    let tag_btn_press = 1;
    let tag_content;
    function tag_visible()
    {
      tag_content = document.getElementById('tag_modify');
      tag_content.style.display = (tag_btn_press % 2 == 0) ? "none" : "grid" ;
      tag_btn_press ++;
    };
    function loadModel(url){
      objLoader1.load(url, object =>{
        scene.add(object); 
        new_material = new THREE.MeshNormalMaterial({wireframe: true});
        object.traverse((child) =>{
          if(child.isMesh ) prev_mesh.push(child.material);
        });
        prev_object = object;

        const boundingBox = new THREE.Box3().setFromObject(object);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());

        const cameraDistance = Math.max(size.x, size.y, size.z) * 0.75;

        camera.position.set(center.x, center.y, center.z + cameraDistance);
        camera.lookAt(center);
        URL.revokeObjectURL(url);
      });
    }
    const map_annotations = new Map();
    const map_line = new Map();
    function add_annotation()
    {
      let annoation_text = document.getElementById('annotation');
      let text = annoation_text.value;
      //attempt to add annotatios take two
      const objectDiv = document.createElement('div');
      objectDiv.id = "space";
      objectDiv.className = 'label';
      objectDiv.textContent = text;
      objectDiv.style.backgroundColor = 'transparent';

      //set position of text
      const label_1 = new CSS2DObject(objectDiv);
      map_annotations.set('space', label_1);
      label_1.position.set(1.5 * 7,0 ,0 );
      label_1.center.set(0.5, 0.5);
      label_1.layers.set(0);
      
      prev_object.add(label_1);
    }
    onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user_id = user.uid || 'Guest';
        load_files();
      } else {
        console.log('No user signed in.');
      }
    });
    
  });
  async function load_url(project_id)
  {
    removeObject();
    remove_all_anotations();
    sharedValue.set(project_id);
    const presigned_url = await get_url(project_id);
    loadModel(presigned_url);
    //await 
    load_project_annotations(project_id);
    //save to local storage
    localStorage.setItem('objModelUrl', presigned_url);
    localStorage.setItem('project_id',project_id );
  }
  //trying to remove object from the scene
  function removeObject()
    {
      if(prev_object) 
      {
        scene.remove(prev_object);
      }
      curent_annotation_id ="";
      prev_object= null;
      prev_mesh = [];
      let mesh_to_wireframe = document.getElementById("reverse_mesh");
      mesh_to_wireframe.checked = false;
      localStorage.removeItem('objModelUrl');
      localStorage.removeItem('project_id');
      sharedValue.set("");
    }

  let button_names= [];
  async function load_files()
  {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    try
    {
        const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/model/names/"+ user_id, requestOptions);
        const result = await response.text();
        button_names = JSON.parse(result);
    }
    catch (error){
        console.error(error)
    }
  }
  let button_annotation_names = [];
  async function load_project_annotations(project_id) 
  {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try
    {
      const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/retrive/annotations/" + project_id +"/"+ user_id , requestOptions);
      const result = await response.text();
      button_annotation_names = JSON.parse(result);
    }
    catch (error)
    {
      console.error("Error from loading project annotations: "+error)
    }
    
  }

  let curent_annotation_id = "";
  function modify_annotation()
  {
    let element = document.getElementById("space");
    let color = document.getElementById("annotation_color");
    element.style.color = color;
    element.style.backgroundColor = "red";

    let size = document.getElementById("annotation_size");
    element.style.fontSize = size.value;
    

    let label = map_annotations.get('space');
    let x_position = document.getElementById("x_position");
    let y_position = document.getElementById("y_position");
    let z_position = document.getElementById("z_position");

    label.position.set(x_position.value , y_position.value - 0.1, z_position.value);
  }

  function remove_all_anotations()
  {
    if (button_annotation_names.length != 0)
    {
      for (let annotation of button_annotation_names)
      {
        let element = document.getElementById(annotation.id);
        if(element)
        {
          element.remove();
          remove_annotation(annotation.id);
        }
      }
      remove_lines();
    } 
  }
  function remove_lines(id="")
  {
    if(id != "")
    {
      let line = map_line.get(id);
      scene.remove(line);
      if(map_line.has(id))
      {
        map_line.delete(id);
      }
    }
    else if(map_line.size != 0)
    {
      map_line.forEach((value, id) =>{
        scene.remove(value);
        map_line.delete(id);
      }); 

    }
  }
  function remove_annotation(id ="") 
  {
    if(curent_annotation_id != "")
    {
      id = curent_annotation_id;
      let element = document.getElementById(id);
      if(element)
      {
        element.remove();
      }
      remove_lines(id);
      curent_annotation_id = "";
    }
    if (id != "" && map_annotations.has(id))
    {
      let label = map_annotations.get(id);
      prev_object.remove(label);
      map_annotations.delete(id);
    }

  }

  async function add_annotation_(id = 'Q') 
  {
    if (id instanceof PointerEvent) {
        id = 'Q'; // Default value
    }
    let x_position = document.getElementById("x_position");
    let y_position = document.getElementById("y_position");
    let z_position = document.getElementById("z_position");
    let annoation_text = document.getElementById('annotation');
    let name = document.getElementById("annotation_name");
    if(x_position.value == "" || y_position.value == "" || z_position.value == "")
    {
      alert ("You have not selected a point on the model to add an annotation to");
    }
    else if (annoation_text.value == "" || annoation_text.value == null)
    {
      alert ("You have not enter text create an annotation this is required");
    }
    else if (name.value == ""|| name.value == null)
    {
      lert ("You have not enter a name to the annotation you need this to create an annotation");
    }
    else
    {
      let color = document.getElementById("annotation_color");
      let color_value = (color.value == null|| color.value.trim() == '')? 'white': color.value.trim();
      let size = document.getElementById("annotation_size");
      let size_value = (size.value == null|| size.value == '')? '16': size.value;
      if(id === 'Q')
      {
        id = await create_annotation(name.value, annoation_text.value,size_value, color_value,x_position.value, y_position.value, z_position.value, x_position.value * 2,y_position.value * 2, z_position.value * 2);
      }
      //attempt to add annotatios take two
      const objectDiv = document.createElement('div');
      
      if(curent_annotation_id == "")
      {
        button_annotation_names = [...button_annotation_names,{id: id, name: name.value}];
      }
      objectDiv.id = id;
      objectDiv.className = 'label';
      objectDiv.style.color = color_value + "px";
      objectDiv.textContent = annoation_text.value;
      objectDiv.style.backgroundColor = 'transparent';

      //set position of text
      const label_1 = new CSS2DObject(objectDiv);
      map_annotations.set(id, label_1);
      label_1.position.set(x_position.value *2 , y_position.value *2 , z_position.value *2);
      label_1.center.set(0.5, 0.5);
      label_1.layers.set(0);

      // trying to add line when annotation is created
      const clickedPoint = new THREE.Vector3(x_position.value , y_position.value , z_position.value);
      const points = [];
      points.push(clickedPoint);
      points.push(clickedPoint.clone().multiplyScalar(2));

      const material = new THREE.LineBasicMaterial({color: 0x0000ff});
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      map_line.set(id, line);
      scene.add(line);
      // end of trying to add line when annotation is created
      
      prev_object.add(label_1);
    }
  }
  async function select_anotation(id, name, text,color_value, font_size, object_x, object_y, object_z, x_anchor, y_anchor, z_anchor)
  { 
    curent_annotation_id = id;

    let set_name = document.getElementById("annotation_name");
    set_name.value = name;

    let set_text = document.getElementById("annotation");
    set_text.value = text;
    
    let color = document.getElementById("annotation_color");
    color.value = color_value ;

    let size = document.getElementById("annotation_size");
    size.value = font_size;
    
    let x_position = document.getElementById("x_position");
    x_position.value = x_anchor;

    let y_position = document.getElementById("y_position");
    y_position.value = y_anchor;

    let z_position = document.getElementById("z_position");
    z_position.value= z_anchor;

    add_annotation_(id);
  }
  async function load_annotation(annotation_id, annotation_name)
  {
    if(map_annotations.has(annotation_id))
    {
      alert("!!! The annotation with name:{"+annotation_name+"}is already displayed !!!");
    }
    else
    {
      const requestOptions = {
            method: "GET",
            redirect: "follow"
          };

      try
      {
        // /retrive/annotation/<int:project_id>/<string:user_id>/<int:annotation_id>
        const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/retrive/annotation/" + $sharedValue +"/" +user_id+"/"+annotation_id , requestOptions);
        const result = await response.text();
        const object = JSON.parse(result)[0];
        await select_anotation(object['id'],object['name'], object['text'],object['color'],object['size'],object['object_anchor_x'], object['object_anchor_y'], object['object_anchor_z'], object['div_anchor_x'], object['div_anchor_y'], object['div_anchor_z']);
      }
      catch (error)
      {
        console.error("Error from loading project annotations: "+error)
      }
    }
      
    
  }
  async function create_annotation( name, text,size, color_value, object_x, object_y, object_z, x_anchor, y_anchor, z_anchor)
  {
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };
    try
    {
      const respons = await fetch(PUBLIC_BACKEND_WEBSITE_URL+"/create/annotation/"+$sharedValue + "/" + user_id + "/" + name + "/" + text + "/" + size + "/" + color_value + "/" + object_x + "/" + object_y + "/" + object_z + "/" + x_anchor +"/" +  y_anchor + "/" + z_anchor,requestOptions);
      const result = await respons.text();
      return JSON.parse(result)[0]["id"];
    }
    catch (error)
    {
      console.error("Error creating annotation: "+ error)
    }
  }
  function clear_form()
  {
    //clear current annotation id
    curent_annotation_id = "";

    //reset values for input
    document.getElementById("annotation_name").value ="";
    document.getElementById("annotation").value = "";
    document.getElementById("annotation_color").value = "" ;
    document.getElementById("annotation_size").value = "";

    //clear postion values
    document.getElementById("x_position").value = '';
    document.getElementById("y_position").value = '';
    document.getElementById("z_position").value = '';
  }
  async function delte_annotation()
  {
    let result = await project_delete_annotation();
    if(result[0]["result"] == 200)
      clear_form();
    else
      alert("Deletion of annotation was not succesful.");
  }
  async function project_delete_annotation()
  {
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };

    try
    {
      const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL + "/remove/annotation/" + $sharedValue + "/" + user_id + "/" + curent_annotation_id, requestOptions);
      const result = await response.text();
      button_annotation_names = button_annotation_names.filter(button_annotation_names => button_annotation_names.id != curent_annotation_id );
      remove_annotation(curent_annotation_id);
      return JSON.parse(result);
    }
    catch (error)
    {
      console.error("Error coccured when delteting annotation: " + error)
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

</script>


<style>
  div
  {
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
    background-color: var(--background-color);
    /*background-color: #181818;*/
  }
  #tag_config{
    pointer-events:all;
    display: grid;
    grid-template-columns: auto auto;
    float: right;
    width: auto;
    height: 90vh;/*100%; */
    background-color: var(--background-color);
  }
  .btn{
    font-size: 20px;
    background-color: var(--background-color-s);
    color: var(--color-s);
    padding-top: 0.5rem;
  }
  #tag_modify
  {
    display: none;
    /* this is to experiment with row */
    grid-template-rows: auto auto auto;
    max-height: 90vh;
  }
  button 
  {
    border: 1px solid transparent;
    background-color: var(--background-color);
    color: var(--color);
    cursor: pointer;
    transition: border-color 0.25s;
    
  }
  button:hover 
  {
    border-color: #646cff;
  }
  button:focus,button:focus-visible 
  {
    outline: 4px auto -webkit-focus-ring-color;
  }
  #clear_btn
  {
    background-color: #EB05C1;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 15px;
    font-size: 1.3rem;
    pointer-events:all;
  }
  form{
    width: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
  #position{
    display: grid;
  }
  #response_btn
  {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
  }
  .scroll
  {
    overflow-y: auto;
    /* max-height: 20vh; */
  }
  .respons{
    border-color: #1d2e28;
  }
  
</style>
<div class="overlay">
  <div id="userFiles">
    <div id = "user_files">
      <table id = "user_files_table">
        <caption>Projects:</caption>
        {#if button_names.length === 0}
        <p>Loading...</p>
        {:else}
          {#each button_names as button}
          <tr>
            <button 
              style="width: 150px; font-size: 1em;"
              on:click={() => load_url(button.project_id) }>
              {button.project_name}
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
  <button id ="clear_btn" on:click={removeObject}>clear</button>
  <div id="tag_config">
    <button on:click={tag_visible} class="btn" id="folder_btn">
      <i class="fa fa-bars"></i>
    </button>
    <div id = "tag_modify">
      <div style="width:fit-content; height:fit-content; padding-left: 1rem;">
        <label for="reverse_mesh">View wireframe: </label>
        <input type='checkbox'id="reverse_mesh" on:click={reverse_mesh}> 
      </div>
      
      <div>
        <form>
        <label style="width: fit-content;">
          Annotation name:
          <input id="annotation_name"type="text">
        </label>
        <p>Input annotation here</p>
        <textarea id="annotation" name= "input_value" rows="5" cols="50"
          placeholder="Enter annotation here ..." ></textarea>
        <div style="height:fit-content; padding: 10px 0px;">
          <label for="annotation_color">Font color:
            <input type="text" id="annotation_color">
          </label>
        </div>
        <div style="height:fit-content; padding: 10px 0px;">
          <label for="annotation_size">Font size:
            <input type="text" id="annotation_size">
          </label> 
        </div>
        <div id = "position" style="height:fit-content; padding: 10px 0px;">
          <caption>Position:</caption>
          <p>Click on the object you wan to refernce:</p>
          <label for="x_position" style="width: fit-content; padding: 10px 0px; ">
            x-axis:
            <input  id="x_position" type="number" step="any">
          </label>
          <label  for="y_position" style="width: fit-content; padding: 10px 0px;">
            y-axis:
            <input id="y_position" type="number" step="any">
          </label>
          <label for="z_position" style="width: fit-content; padding: 10px 0px;">
            z-axis:
            <input id="z_position" type="number" step="any">
          </label>
        </div>
        <div id="response_btn">
          <button style="font-size: 1rem;" class="respons" on:click={add_annotation_}>Create</button>
          <button style="font-size: 1rem;" class="respons" on:click={modify_annotation}>Modify</button>
          <button style="font-size: 1rem;" class="respons" on:click={delte_annotation}>Delete</button>
          <button style="font-size: 1rem;" class="respons" on:click={clear_form}>Cancel</button>
          <button style="font-size: 1rem;" class="respons" on:click={remove_annotation}>Clear</button>
          <button style="font-size: 1rem;" class="respons" on:click={remove_all_anotations}>Clear all</button>
        </div>
        
      </form>  
      </div>
         
      
      <p style="width:100%; text-align: center; font-weight: bold">Annotations:</p>
      <div class = "scroll">
        
        <table id = "project_annotation_table" style="width:100%">
          <!-- <caption>Annotations:</caption> -->
          {#if button_annotation_names.length === 0}
          <p style="width:100%; text-align: center;">No annotations found . . .</p>
          {:else}
            {#each button_annotation_names as annotation}
            <tr>
              <button 
                style="font-size: 1em;width: 100%;"
                on:click={() => load_annotation(annotation.id,annotation.name) }>
                {annotation.name}
              </button> 
            </tr>
            {/each}
          {/if}
        </table>
      </div>
        
      
    </div>
  </div>
</div>
<div bind:this={container}></div>




