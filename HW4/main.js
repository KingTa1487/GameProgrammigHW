	
	import * as THREE from 'https://cdn.skypack.dev/three@0.136';
	import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
	import {Steve} from './Steve.js';

	
		var camera, renderer, scene;
		var clock = new THREE.Clock();
		var steve;
		
		init();
		animate();
		
		function init(){
			scene = new THREE.Scene();
			
			
			renderer = new THREE.WebGLRenderer({antialias: true});
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setClearColor(0x444444);
			document.body.appendChild(renderer.domElement);

			camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);
			camera.position.set(0, 100, 300);
			
			let controls = new OrbitControls(camera, renderer.domElement);
			controls.enableKeys = false;
			
			var gridXZ = new THREE.GridHelper(400, 20, 'red', 0xcccccc);
			scene.add(gridXZ);

			steve = new Steve(0, 2.5);
			clock.getDelta();
		}
		
			//關鍵影格
		function keyframe(tt){
			var s = ((tt) % 2)/2;

			for(var i = 1; i < steve.keys.length; i++){
				if(steve.keys[i][0] > s)
					break;
			}
		
			var j = i-1;
			var a = (s - steve.keys[j][0] )/ (steve.keys[j+1][0] - steve.keys[j][0]);
			steve.intkey = [ steve.keys[j][1].theta1*(1-a) + steve.keys[j+1][1].theta1*a, 
					];
		}
		
		function animate(){
			
			var dt = clock.getDelta();
			keyframe(steve.tt);
			
			steve.arms1.rotation.z = steve.intkey[0];
			steve.arms2.rotation.z = -steve.intkey[0];
			steve.arms3.rotation.z = steve.intkey[1];
			steve.legs2.rotation.z = -steve.intkey[1];
			
			renderer.render (scene, camera);	
			requestAnimationFrame(animate);
		}
		
		//export {init, animate, scene};
