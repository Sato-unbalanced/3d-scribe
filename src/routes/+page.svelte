<script>

    import { SignedIn, SignedOut } from "sveltefire";



    // new stuff that was moved from threeScence to me voed otuof the way when loading a new page
    import { onMount } from "svelte";
  import * as THREE from "three";
  import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'
  import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
  
  let container;
  let objLoader1;
  onMount(() => {
    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xFFFFFF);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;
  
    // Renderer
    const renderer = new THREE.WebGLRenderer();
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
    objLoader1 = new OBJLoader();

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.onload = function (e){
            const contents = e.target.result;
            const objFile = new Blob([contents], {type:"application/octet-stream"});
            const url = URL.createObjectURL(objFile);
            localStorage.setItem('objModelUrl', url);
            loadModel(url);
            };
          reader.readAsArrayBuffer(file);
        }
      });

        // Animation loop 
      const animate = function () { 
        requestAnimationFrame(animate); 
        controls.update();
        renderer.render(scene, camera); 
      }; 
      
      animate(); 
      // Handle window resize 
      window.addEventListener('resize', () => { 
        camera.aspect = window.innerWidth / window.innerHeight; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth, window.innerHeight*0.9); 
      });


      function loadModel(url){
      objLoader1.load(url, object =>{
        scene.add(object); 
        const boundingBox = new THREE.Box3().setFromObject(object);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());

        const cameraDistance = Math.max(size.x, size.y, size.z) * 0.75;

        camera.position.set(center.x, center.y, center.z + cameraDistance);
        camera.lookAt(center);

        URL.revokeObjectURL(url);
      });
    }


    window.addEventListener('load', ()=>{
      console.log("page was reloaded");
      const savedUrl = localStorage.getItem('objModelUrl');
      console.log(localStorage.getItem('objModelUrl'));
      if(savedUrl){
        console.log("trying to load in file that was saved locally")
        loadModel(savedUrl);
      }
    });


    });  

</script>

<h1>Welcome to 3d-scribe</h1>


<SignedOut>
    <p>you need to log in to edit modules</p>
</SignedOut>

  
<style>
  canvas {
    display: block;
  }

</style>
  
<div bind:this={container}></div>