
/* global renderer, camera, scene, captain */
var degree = Math.PI / 180;
var elapsed = 0;
var step = 2 * degree;
var degrees = 0;
var limit = 109.7;



var render = function () {
//    requestAnimationFrame(render);
//    if (elapsed <= 70.3) {
//        console.log(elapsed);
//        elapsed++;
//        captain.rotation.x += step;
//    }
//    captain.rotation.x += 0.01;
//    captain.rotation.y += 0.01;
//    captain.rotation.z += 0.01;

    renderer.render(scene, camera);
};

render();