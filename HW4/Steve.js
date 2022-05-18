	
	//import * as THREE from 'https://cdn.skypack.dev/three@0.136';
	//import *  from 'https://code.jquery.com/jquery-2.1.4.min.js';


	class Steve{
		constructor(angle, tt){
			this.angle_thrust = 0;
			//Steve
			this.Steve = new THREE.Object3D();
			this.loader = new THREE.TextureLoader();
			//移動
			this.angle = angle;
			this.pos = new THREE.Vector3();
			this.vel = new THREE.Vector3();
			this.force = new THREE.Vector3();
		
			//關鍵影格
			var theta1 = 0, theta2 = 0;
			this.pose1 = {
				theta1: -Math.PI/4,
				theta2: Math.PI/4
			}
			this.pose2 = {
				theta1: Math.PI/4,
				theta2: -Math.PI/4
			}
			this.keys = [[0, this.pose1], [0.5, this.pose2], [1, this.pose1]];
			this.tt = tt ;
			this.intkey = [];	

			///Steve
			this.Steve.position.set(0, 0, 0);
			//head
			this.loader.crossOrigin = '';
			 let headtex = this.loader.load('./head.jpg');
			 let headMap = new THREE.MeshBasicMaterial({
				map:headtex, 
				side:THREE.DoubleSide
			});
			this.head = new THREE.Mesh(new THREE.SphereGeometry( 15, 32, 16 ), headMap);
			this.head.position.set(0, 35, 0);
			
			//body
			this.loader.crossOrigin = '';
			let bodytex = this.loader.load('./clothes.png');
			let bodyMap = new THREE.MeshBasicMaterial({
					map:bodytex, 
					side:THREE.DoubleSide
				});
			this.body = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20), bodyMap);
			this.body.rotation.y = -Math.PI/2;
			this.body.position.set(0, 20, 0);
			
			/*//eyes
			this.eyes1 = new THREE.Mesh(new THREE.BoxGeometry(2, 5, 2), new THREE.MeshBasicMaterial({color:'black'}));
			this.eyes2 = this.eyes1.clone();
			this.eyes1.position.set(-13, 33, 7);
			this.eyes2.position.set(-13, 33, -7);*/
			
			//arms
			this.loader.crossOrigin = '';
			let armstex = this.loader.load('./arms.png');
			let armsMap = new THREE.MeshBasicMaterial({
				map:armstex, 
				side:THREE.DoubleSide
			});
			
			this.arms1 = Arms(1.5, 12, armsMap);
			this.arms1.position.set(0, 20, 6);
			this.arms1.rotation.x = Math.PI;
			
			this.arms2 = Arms(1.5, 12, armsMap);
			this.arms2.position.set(0, 20, -6);
			this.arms2.rotation.x = Math.PI;
			
			//legs
			this.loader.crossOrigin = '';
			let legstex = this.loader.load('./legs.png');
			let legsMap = new THREE.MeshBasicMaterial({
				map:legstex, 
				side:THREE.DoubleSide
			});
			
			this.legs1 = Legs(2, 10, legsMap);
			this.legs2 = Legs(2, 10, legsMap);
			this.legs1.position.set(0, 10, 3);
			this.legs2.position.set(0, 10, -3);
			this.legs1.rotation.x = Math.PI;
			this.legs2.rotation.x = Math.PI;
			
			this.Steve.add(this.head, this.body, this.arms1, this.arms2, this.legs1, this.legs2);
			//scene.add(this.Steve);
			
		}
		
	}
	function Arms(r, l, armsMap){	
		
		let A = new THREE.Object3D();
		let arm = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l), armsMap);
		A.add(arm);
		arm.position.set(0, l/2, 0);
		arm.rotation.x = Math.PI;
		return A;
	}
	
	function Legs(r, l, legsMap){
		
		let L = new THREE.Object3D();
		let leg = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l), legsMap);
		L.add(leg);
		leg.position.set(0, l/2, 0);
		leg.rotation.x = Math.PI;
		return L;
	}
	//export {Steve};
