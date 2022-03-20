import * as THREE from "https://threejs.org/build/three.module.js";

import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import U from './train.js';

var renderer, scene, camera;
		//var m ;
		var angle = 0, pause = false;
		var clock = new THREE.Clock();
		var loader = new THREE.TextureLoader();
		var trainAssembly = new THREE.Object3D(), trees;
		var train;

		init();
		animate();
		
		/*loader.load(
			
			'https://cdn.myminifactory.com/assets/object-assets/591f5bd30dded/images/720X720-thomas-myminifactory-photo-05.jpg',
			function (texture){
				m = new THREE.MeshBasicMaterial({
					map : texture
				});
				
				//let mesh = new THREE.Mesh(new THREE.PlaneGeometry(80, 60), m);
				//scene.add(mesh);
				train = new THREE.Mesh(new THREE.PlaneGeometry(80, 60), m);
				train.position.set(0, 0, 40);
				scene.add(train);
			},
			undefined,
			
			function (err){
				console.error('An error happened');	
			}
			
		);*/

		function init(){

			renderer = new THREE.WebGLRenderer();
			document.body.appendChild(renderer.domElement);
			var width = window.innerWidth;
			var height = window.innerHeight;
			renderer.setSize(width, height);
  
			renderer.setClearColor(0x31CCFB   );
	
			scene = new THREE.Scene();
			//var grid = new THREE.GridHelper(200, 30, 0xcccccc, 0x3333ff);
			//scene.add(grid);
			/* axes = new THREE.AxesHelper(5);
			scene.add(axes);*/
	
			camera = new THREE.PerspectiveCamera(50, width/height, 10, 1000);
			camera.position.y = 80;
			camera.position.z = 150;
			camera.lookAt(new THREE.Vector3(0, 0, 0));
  
			let controls = new THREE.OrbitControls(camera, renderer.domElement);
			window.addEventListener('resize', onWindowResize, false);
			
			//train = new Train();
			/*train = new THREE.Mesh(new THREE.BoxGeometry(30, 15, 15), new THREE.MeshNormalMaterial())
			train.position.set(0, 0, 40);
			scene.add(train);*/
			
			loader.crossOrigin = '';
			//鐵軌
			let railtex = loader.load('https://i.imgur.com/KOBZVDi.png');
			let railMap = new THREE.MeshBasicMaterial({
				map:railtex,
				side:THREE.DoubleSide,
				transparent:true
			});
			let rail = new THREE.Mesh(new THREE.PlaneGeometry(250, 170), railMap);
			rail.rotation.x = Math.PI/2;
			rail.position.z = 5;
			scene.add(rail);
			//樹
			let treetex = loader.load('https://i.imgur.com/XxndnZU.png');
			let treeMap = new THREE.MeshBasicMaterial({
				map:treetex,
				side:THREE.DoubleSide,
				transparent:true
			});
			let tree = new THREE.Mesh(new THREE.PlaneGeometry(10, 20), treeMap);
			trees = [];
			for (let i=0; i<10; i++){
				let t = tree.clone();
				t.position.set((-1+Math.random()*2)*30, 8, (-1+Math.random()*2)*30);
				trees.push(t);
				scene.add(t);
			}
			//車頭
			let headtex = loader.load('https://i.imgur.com/shVktj8.jpg');
			let headMap = new THREE.MeshBasicMaterial({
				map:headtex, 
				side:THREE.DoubleSide
			});
			let head = new THREE.Mesh(new THREE.CircleGeometry(7.5, 15), headMap);
			head.rotation.y = Math.PI /2;
			head.position.set(15.1, 0, 0);
			trainAssembly.add(head);
			//
			//車身
			let bodytex = loader.load('https://i.imgur.com/kqX6WLx.jpg');
			let bodyMap = new THREE.MeshBasicMaterial({
				map:bodytex,
				side:THREE.DoubleSide
			})
			let body = new THREE.Mesh(new THREE.CylinderGeometry( 7.5, 7.5, 30, 32 ), bodyMap);
			body.rotation.x = Math.PI/2;
			body.rotation.z = -Math.PI/2;
			trainAssembly.add(body);
			//車尾
			let backtex = loader.load('https://i.imgur.com/5FAjIXS.jpg');
			let backMap = new THREE.MeshBasicMaterial({
				map:backtex, 
				side:THREE.DoubleSide
			});
			let back = new THREE.Mesh(new THREE.CircleGeometry(7.5, 15), backMap);
			back.rotation.y = Math.PI /2;
			back.position.set(-15.1, 0, 0);
			trainAssembly.add(back);
			//煙囪
			let chimney = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 8, 32), new THREE.MeshBasicMaterial({color:0x000001}));
			let chimney2 = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 2, 32), new THREE.MeshBasicMaterial({color:0x3145FB}));
			chimney.position.set(10, 7.5, 0);
			chimney2.position.set(10, 12, 0);
			trainAssembly.add(chimney, chimney2);
			//車輪
			let tire = new THREE.Mesh(new THREE.SphereGeometry(2.5, 32, 16), new THREE.MeshBasicMaterial( { color: 0x000000 } ));
			for(let j = 0; j < 2; j++){
				for (let k = 0; k < 4; k++){
					let ball = tire.clone();
					if(j == 0)
						ball.position.set(-11 + k*7, -5.5, 6.5);
					else
						ball.position.set(-11 + k*7, -5.5, -6.5);
					scene.add(ball);
					trainAssembly.add(ball);
				}
			}
			let bar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 25, 35), new THREE.MeshBasicMaterial({color: 0xFB3D31}));
			bar.rotation.z = Math.PI/2;
			bar.position.y = -5.5;
			let bar2 = bar.clone();
			bar.position.z = 8;
			bar2.position.z = -8;
			trainAssembly.add(bar, bar2);
			
			trainAssembly.position.set(0, 7.5, 40);
			scene.add(trainAssembly);
			
			clock.getDelta();
  
		}
		
		
		
		$("#pause").click(function(){
			pause = !pause;
			//run();
		})
		
		/*
		function run(){
			if(pause == true){
				//直線
				if(train.position.z > 0 && train.position.x < 40 && train.position.x > -40){
					train.position.x += 0.5;
				}
				if(train.position.z < 0 && train.position.x > -40 && train.position.x < 40){
					train.position.x -= 0.5;
				}
				//彎道
				if(train.position.x >= 40){
					angle += 0.01;
					train.position.set(40 * Math.sin(angle)+40, 0, 40 * Math.cos(angle)  );
				}
 
				setTimeout(run, 7.295);
				train.position.x += 0.5;
			
			}
		}*/
		/*
		1s/68.53 = X/0.5
		68.53X=0.5
		X=0.00729
		*/
		
		

		function onWindowResize(){

			var width = window.innerWidth;
			var height = window.innerHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
  
		}

		function animate(){
			var dt = clock.getDelta();
			
			let cameraRoot = camera.position.clone();
			cameraRoot.y = 0;
			trees.forEach(function(t){t.lookAt(cameraRoot)})
			
			if(pause == true){
				//直線1.188
				if(train.trainAssembly.position.z > 0 && train.trainAssembly.position.x < 40 && train.trainAssembly.position.x > -40){
					train.trainAssembly.position.x += 1.188;
				}
				if(train.trainAssembly.position.z < 0 && train.trainAssembly.position.x > -40 && train.trainAssembly.position.x < 40){
					train.trainAssembly.position.x -= 1.188;
				}
				//彎道0.0267
				if(train.trainAssembly.position.x >= 40){
					train.angle += 0.0267;
					train.trainAssembly.position.set(40 * Math.sin(angle) + 40, 7.5, 40 * Math.cos(angle)  );
					train.trainAssembly.rotation.y = angle;
				}
				if(train.trainAssembly.position.x <= -40){
					angle += 0.0267;
					train.trainAssembly.position.set(40 * Math.sin(angle) - 40, 7.5, 40 * Math.cos(angle) );
					train.trainAssembly.rotation.y = angle;
				}
				
 
				//setTimeout(run, 7.295);
				//train.position.x += 0.5;
			
			}
			
			requestAnimationFrame(animate);
			render();
  
		}
		
		

		function render(){

			renderer.render(scene, camera);

		}
		
export {init, animate, scene};