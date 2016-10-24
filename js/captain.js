/* global THREE, scene */

var vertices = [
    0.000, 0.000, 0.000,
    1.000, 0.000, 0.000,
    0.500, 0.866, 0.000,
    0.500, 0.288, 0.806
];
var faces = [
    0, 1, 2,
    0, 1, 3,
    1, 2, 3,
    0, 2, 3
];
var geometry = new THREE.PolyhedronGeometry(vertices, faces, 1, 0);
var captain = new THREE.Object3D();

captain.add(new THREE.LineSegments(
        geometry,
        new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.5
        })

        ));

captain.add(new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading,
            wireframe: false
        })

        ));
//captain.position.set(1,1,1);
scene.add(captain);

