import {
	Mesh,
	Quaternion,
} from 'three';

let Class = class extends Mesh {};

{
	let cameraQuaternion = new Quaternion();
	Class.prototype.onBeforeRender = function(renderer, scene, camera) {
		//this.lookAt(camera.position);
		this.setRotationFromQuaternion(camera.getWorldQuaternion(cameraQuaternion));
	};
}

Class.prototype.isCameraFacingGroup = true;

export default Class;