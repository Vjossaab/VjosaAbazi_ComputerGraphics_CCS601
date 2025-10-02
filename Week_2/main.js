import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 10;

//cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial(
    {
        color:0xff0000
    }
);
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

//sphere
const sphere = new THREE.SphereGeometry(1,32,32);
const sphereMat=new THREE.MeshStandardMaterial({
    color:0xff0000,
    wireframe: true
});
const sphereMesh = new THREE.Mesh(sphere,sphereMat);
sphereMesh.position.set(0,0,5);
scene.add(sphereMesh);


//cone
const cone = new THREE.ConeGeometry(2,3,3);
const coneMat = new THREE.MeshStandardMaterial({
    color:0xff0000
})
const coneMesh = new THREE.Mesh(cone, coneMat);
coneMesh.position.set(-3,0,2);
scene.add(coneMesh);

//donut


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cubeMesh.rotation.y += 0.01;
    cubeMesh.translateX(0.1);
    coneMesh.rotation.y -= 0.01;
    coneMesh.translateX(-0.1);
    sphereMesh.rotation.y += 0.01;
    //sphereMesh.translateY(-0.01);
  
}

animate();

document.body.appendChild( renderer.domElement );