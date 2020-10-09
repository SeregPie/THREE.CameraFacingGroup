import {
	Mesh,
	Quaternion,
} from 'three';

let cameraQuaternion = new Quaternion();

let Class = class extends Mesh {
	onBeforeRender(renderer, scene, camera) {
		//this.lookAt(camera.position);
		this.setRotationFromQuaternion(camera.getWorldQuaternion(cameraQuaternion));
	}
};

Class.prototype.isCameraFacingGroup = true;

export default Class;
