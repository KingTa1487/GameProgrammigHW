class Body{
	constructor(){
		this.body = new THREE.Object3D();
		
		this.thigh = Legs(3, 20);
		this.thigh.position.y = 40;
		this.calf = Legs(2.5, 20);
		this.calf.position.y = 20;
		this.body.add(this.thigh, this.calf);
		
		scene.add(this.body);
	}
	
	
}
function Legs(w, l){
	var legsbag = new THREE.Object3D();
		
	let leg = new THREE.Mesh(new THREE.CapsuleGeometry(w, l), new THREE.MeshNormalMaterial());
	leg.position.y = -l/2;
	legsbag.add(leg);
	
	return legsbag;
}