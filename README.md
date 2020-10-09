# THREE.CameraFacingGroup

`class THREE.CameraFacingGroup extends THREE.Mesh`

A group of objects that are always facing the camera.

## setup

### npm

```shell
npm i @seregpie/three.camera-facing-group
```

---

```javascript
import CameraFacingGroup from '@seregpie/three.camera-facing-group';
```

### browser

```html
<script src="https://unpkg.com/three"></script>
<script src="https://unpkg.com/@seregpie/three.camera-facing-group"></script>
```

The class is globally available as `THREE.CameraFacingGroup`.

## usage

```javascript
let geometry = new THREE.CircleGeometry(8, 32);
let material = new THREE.MeshBasicMaterial({color: 0xffff00});
let mesh = new THREE.Mesh(geometry, material);
let group = new THREE.CameraFacingGroup();
group.add(mesh);
scene.add(group);
```

## members

### properties

`.isCameraFacingGroup = true`

Used to check whether this is an instance of `CameraFacingGroup`.
