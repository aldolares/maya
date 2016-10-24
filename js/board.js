

/* global THREE, scene */
var unit = 1;
var degree = Math.PI / 180;
var height = Math.sqrt(Math.pow(unit, 2) - Math.pow(unit / 2, 2));
var north = radians(30);
var south = radians(-30);
var max_size = [1, 3, 5, 7, 9, 11, 13, 15, 15, 13, 11, 9, 7, 5, 3, 1];
var black = new THREE.MeshPhongMaterial({
    color: 0xFF0000,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading,
    wireframe: false
});
var white = new THREE.MeshPhongMaterial({
    color: 0x00FFFF,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading,
    wireframe: false
});
console.log(unit);
var geom = new THREE.Geometry();
var v1 = new THREE.Vector3(0, 0, 0);
var v2 = new THREE.Vector3(unit, 0, 0);
var v3 = new THREE.Vector3(unit / 2, height, 0);

console.log(geom.vertices);
geom.vertices.push(v1);
geom.vertices.push(v2);
geom.vertices.push(v3);

geom.faces.push(new THREE.Face3(0, 1, 2));
geom.computeFaceNormals();

var handycap = -8;
var isNorth = false;
var isBlack = true;
var k = 0;
for (i = 0; i <= 15; i++) {
    var y = 0;
    if (i > 7) {
        isNorth = true;
        k = -unit / 2;
        isBlack = false;
    } else {
        isBlack = true;
    }
    for (j = 1; j <= max_size[i]; j++) {
        var mesh;
        if (isBlack) {
            mesh = new THREE.Mesh(geom, black);
            mesh.rotation.set(0, 0, south);
        } else {
            mesh = new THREE.Mesh(geom, white);
            mesh.rotation.set(0, 0, north);
        }
        var thing = (max_size[1] + 1);
        if (isBlack && isNorth) {
            y = ((thing / 2 - (j / 2) + k) - 1) + thing;
        } else {
            y = ((thing / 2 - (j / 2) + k) - 2) + thing;
        }
        var stepper = 15 - max_size[i];
        if ((!isBlack && !isNorth)
                || (isBlack && isNorth)) {
            y -= .5;
        }
       y = y - (stepper/2)/2;
        mesh.position.set(
                (i + handycap) * height,
                y,
                0);
        isBlack = !isBlack;
        scene.add(mesh);
    }
}