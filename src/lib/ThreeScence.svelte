<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
  import { OrbitControls} from 'three/addons/controls/OrbitControls.js';
  //import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2Drenderer.js';
  
  let container;
  let objLoader1;
  let labelRenderer;
  let root;
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
/*
      // Load OBJ 
      const objLoader = new OBJLoader(); 
      objLoader.load('../../airboat.obj', (object) => { 
        scene.add(object); 

        const boundingBox = new THREE.Box3().setFromObject(object);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());

        const cameraDistance = Math.max(size.x, size.y, size.z) * 0.75;

        camera.position.set(center.x, center.y, center.z + cameraDistance);
        camera.lookAt(center);


        const model = object.scene;
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: 0x000000});
        const mesh = new THREE.Mesh(geometry,material);
        mesh.position.set(2,0,0);

        model.add(mesh);

      }); */

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

      /*
      //right here trying  implement annotations

      root = new THREE.Group();
      scene.add( root);


      labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(window.innerWidth, window.innerHeight * 0.9);
      labelRenderer.domElement.style.position = 'absolute';
      labelRenderer.domElement.style.top = '0px';
      labelRenderer.domElement.style.pointerEvents = 'none';
      document.getElementById('container').appendChild(labelRenderer.domElement);

      const text = document.createElement('div');
      text.className ='label';

      const label = new CSS2DObject(text);
      label.position.copy( object.position);
      root.add(label);
      //right here trying to implement annotations
      */


      // Animation loop 
      const animate = function () { 
        requestAnimationFrame(animate); 
        controls.update();
        renderer.render(scene, camera); 
        //labelRenderer.render(scene, camera);
      }; 
      
      animate(); 
      // Handle window resize 
      window.addEventListener('resize', () => { 
        camera.aspect = window.innerWidth / window.innerHeight; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth, window.innerHeight*0.9); 
        //labelRenderer.setSize(window.innerWidth, window.innerHeight*0.9);
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
  
<style>
  div{
    width: 100%;
    height: 90%;
    padding: 0;
    margin: 0;
  }
</style>
  
<div bind:this={container}></div>
  