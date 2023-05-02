const spinContainer = document.querySelector("#spin");

// Create a new WebGLRenderer object and set its dimensions
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(spinContainer.clientWidth, spinContainer.clientHeight);

// Set the renderer's DOM element to the container div
spinContainer.appendChild(renderer.domElement);

// Create a new scene object
const scene = new THREE.Scene();

// Add some objects to the scene
const geometry = new THREE.IcosahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xEB503B, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a camera and position it
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  spinContainer.clientWidth / spinContainer.clientHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 2;

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

// Render the scene
renderer.render(scene, camera);

}
animate();

