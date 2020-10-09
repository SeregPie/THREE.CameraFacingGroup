import {
	Mesh,
	Quaternion,
} from 'three';

let Class = class extends Mesh {};

Object.assign(Class.prototype, {
	isCameraFacingGroup: true,

	onBeforeRender: (() => {
		let cameraQuaternion = new Quaternion();
		return function(renderer, scene, camera) {
			//this.lookAt(camera.position);
			this.setRotationFromQuaternion(camera.getWorldQuaternion(cameraQuaternion));
		};
	})(),
});