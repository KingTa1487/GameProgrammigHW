//import {camera} from './hw0.html';

/*function Train(){

	
	let trainAssembly = new THREE.Object3D();
	let trees;
	let loader = new THREE.TextureLoader();
	
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
			

	
}*/

export default class User{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

export function printName(user){
	console.log('Users na,e is ${user.age}');
}

export function printAge(user){
	console.log('User is ${user.age} year old');
}