<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'
    import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
  
    let container;
  
    onMount(() => {
      // Scene
      const scene = new THREE.Scene();
     // scene.background = new THREE.Color(0xFFFFFF);
  
      // Camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 5;
  
      // Renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      //orbital controls
      const controls = new OrbitControls(camera, renderer.domElement);
      camera.position.set(0,20,100);
      controls.update();


      // AmbientLight 
      const color = 0xFFFFFF;
      const intensity = 1;
      const ambient_light = new THREE.AmbientLight(color, intensity);
      scene.add(ambient_light);
  
      /*
      // Light 
      const light = new THREE.DirectionalLight(0xffffff, 1); 
      light.position.set(0, 1, 1).normalize(); 
      scene.add(light); 

  */

      // Load OBJ 
      const objLoader = new OBJLoader(); 
      objLoader.load('../../airboat.obj', (object) => { 
        scene.add(object); 
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
        renderer.setSize(window.innerWidth, window.innerHeight); 
      });
    });
  
  </script>
  
  <style>
    canvas {
      display: block;
    }
  </style>
  
  <div bind:this={container}></div>
  