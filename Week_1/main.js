import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z=10;

//cone
const geometry=new THREE.ConeGeometry(2,5,60);
const material=new THREE.MeshStandardMaterial(
    {
        color: 0xc84fc0
    }
);
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);


//sphere
const sphereGeo = new THREE.SphereGeometry(2, 32, 16 );
const sphereMat = new THREE.MeshStandardMaterial(
    {
         color: 0xc84fc0
    }
);
const sphere = new THREE.Mesh(sphereGeo,sphereMat);
sphere.position.set(4,0,0);
scene.add(sphere);


//lathe
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const latheGeometry = new THREE.LatheGeometry( points );
const latheMaterial = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
const lathe = new THREE.Mesh( latheGeometry, latheMaterial );
lathe.position.set(-4,0,0);
lathe.scale.set(0.2, 0.2, 0.2);
scene.add( lathe );


//lights
const light = new THREE.SpotLight(0xffffff, 500);
light.position.set(5,15,5);
scene.add(light);

const light2 = new THREE.SpotLight(0xffffff, 2000);
light2.position.set(-18, -10, 30);
scene.add(light2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
function animate(){

    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.05;

    lathe.rotation.x += 0.01;
    lathe.rotation.y += 0.05;



}
animate();
document.body.appendChild( renderer.domElement );