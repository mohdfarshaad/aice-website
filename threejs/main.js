import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls;
let building;

function init() {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb); // Sky blue background
  scene.fog = new THREE.Fog(0x87ceeb, 200, 1000);

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(60, 40, 60);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x87ceeb);
  document.getElementById("container").appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.screenSpacePanning = false;
  controls.minDistance = 20;
  controls.maxDistance = 200;
  controls.maxPolarAngle = Math.PI / 2;

  // Lighting
  setupLighting();

  // Create the building
  createBuilding();

  // Ground
  createGround();

  // Environment
  createEnvironment();

  // Hide loading screen
  document.getElementById("loading").style.display = "none";

  // Start animation loop
  animate();
}

function setupLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  // Directional light (sun)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(50, 100, 50);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 500;
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  scene.add(directionalLight);
}

function createBuilding() {
  building = new THREE.Group();

  // Building colors
  const wallColor = 0x90ee90; // Light green
  const roofColor = 0x696969; // Dark gray
  const windowColor = 0x4169e1; // Blue
  const doorColor = 0x8b4513; // Brown

  // Materials
  const wallMaterial = new THREE.MeshLambertMaterial({ color: wallColor });
  const roofMaterial = new THREE.MeshLambertMaterial({ color: roofColor });
  const windowMaterial = new THREE.MeshLambertMaterial({ color: windowColor });
  const doorMaterial = new THREE.MeshLambertMaterial({ color: doorColor });

  // Main building structure (U-shaped)
  // Central section
  const centralGeometry = new THREE.BoxGeometry(20, 30, 8);
  const centralBuilding = new THREE.Mesh(centralGeometry, wallMaterial);
  centralBuilding.position.set(0, 15, 0);
  centralBuilding.castShadow = true;
  centralBuilding.receiveShadow = true;
  building.add(centralBuilding);

  // Left wing
  const leftWingGeometry = new THREE.BoxGeometry(8, 30, 20);
  const leftWing = new THREE.Mesh(leftWingGeometry, wallMaterial);
  leftWing.position.set(-14, 15, -6);
  leftWing.castShadow = true;
  leftWing.receiveShadow = true;
  building.add(leftWing);

  // Right wing
  const rightWingGeometry = new THREE.BoxGeometry(8, 30, 20);
  const rightWing = new THREE.Mesh(rightWingGeometry, wallMaterial);
  rightWing.position.set(14, 15, -6);
  rightWing.castShadow = true;
  rightWing.receiveShadow = true;
  building.add(rightWing);

  // Roofs
  const centralRoofGeometry = new THREE.BoxGeometry(22, 1, 10);
  const centralRoof = new THREE.Mesh(centralRoofGeometry, roofMaterial);
  centralRoof.position.set(0, 30.5, 0);
  centralRoof.castShadow = true;
  building.add(centralRoof);

  const leftRoofGeometry = new THREE.BoxGeometry(10, 1, 22);
  const leftRoof = new THREE.Mesh(leftRoofGeometry, roofMaterial);
  leftRoof.position.set(-14, 30.5, -6);
  leftRoof.castShadow = true;
  building.add(leftRoof);

  const rightRoofGeometry = new THREE.BoxGeometry(10, 1, 22);
  const rightRoof = new THREE.Mesh(rightRoofGeometry, roofMaterial);
  rightRoof.position.set(14, 30.5, -6);
  rightRoof.castShadow = true;
  building.add(rightRoof);

  // Windows for central section
  for (let floor = 0; floor < 3; floor++) {
    for (let i = 0; i < 6; i++) {
      const windowGeometry = new THREE.BoxGeometry(2, 2.5, 0.2);
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      window.position.set(-7.5 + i * 2.5, 8 + floor * 8, 4.1);
      building.add(window);
    }
  }

  // Windows for wings
  for (let floor = 0; floor < 3; floor++) {
    // Left wing windows
    for (let i = 0; i < 4; i++) {
      const windowGeometry = new THREE.BoxGeometry(0.2, 2.5, 2);
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      window.position.set(-9.9, 8 + floor * 8, -12 + i * 4);
      building.add(window);
    }

    // Right wing windows
    for (let i = 0; i < 4; i++) {
      const windowGeometry = new THREE.BoxGeometry(0.2, 2.5, 2);
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      window.position.set(9.9, 8 + floor * 8, -12 + i * 4);
      building.add(window);
    }
  }

  // Main entrance
  const entranceGeometry = new THREE.BoxGeometry(4, 6, 0.2);
  const entrance = new THREE.Mesh(entranceGeometry, doorMaterial);
  entrance.position.set(0, 3, 4.1);
  building.add(entrance);

  // Entrance balcony
  const balconyGeometry = new THREE.BoxGeometry(6, 0.5, 2);
  const balcony = new THREE.Mesh(balconyGeometry, wallMaterial);
  balcony.position.set(0, 12, 5);
  balcony.castShadow = true;
  building.add(balcony);

  // Support columns
  const columnGeometry = new THREE.CylinderGeometry(0.5, 0.5, 12);
  const columnMaterial = new THREE.MeshLambertMaterial({ color: 0xdddddd });

  const leftColumn = new THREE.Mesh(columnGeometry, columnMaterial);
  leftColumn.position.set(-2, 6, 4);
  leftColumn.castShadow = true;
  building.add(leftColumn);

  const rightColumn = new THREE.Mesh(columnGeometry, columnMaterial);
  rightColumn.position.set(2, 6, 4);
  rightColumn.castShadow = true;
  building.add(rightColumn);

  // College sign
  const signGeometry = new THREE.BoxGeometry(12, 2, 0.1);
  const signMaterial = new THREE.MeshLambertMaterial({ color: 0x000080 });
  const sign = new THREE.Mesh(signGeometry, signMaterial);
  sign.position.set(0, 8, 4.2);
  building.add(sign);

  scene.add(building);
}

function createGround() {
  // Ground
  const groundGeometry = new THREE.PlaneGeometry(200, 200);
  const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90ee90 });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Paved area in front
  const pavedGeometry = new THREE.PlaneGeometry(40, 30);
  const pavedMaterial = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });
  const pavedArea = new THREE.Mesh(pavedGeometry, pavedMaterial);
  pavedArea.rotation.x = -Math.PI / 2;
  pavedArea.position.set(0, 0.1, 20);
  pavedArea.receiveShadow = true;
  scene.add(pavedArea);
}

function createEnvironment() {
  // Palm trees
  const createPalmTree = (x, z) => {
    const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.8, 8);
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.set(x, 4, z);
    trunk.castShadow = true;
    scene.add(trunk);

    const leavesGeometry = new THREE.SphereGeometry(3);
    const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 });
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(x, 10, z);
    leaves.castShadow = true;
    scene.add(leaves);
  };

  createPalmTree(-15, 15);
  createPalmTree(15, 15);

  // Some motorcycles (simple representation)
  const createMotorcycle = (x, z) => {
    const bikeGeometry = new THREE.BoxGeometry(2, 1, 0.5);
    const bikeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const bike = new THREE.Mesh(bikeGeometry, bikeMaterial);
    bike.position.set(x, 0.5, z);
    bike.castShadow = true;
    scene.add(bike);
  };

  createMotorcycle(-20, 10);
  createMotorcycle(-22, 8);
  createMotorcycle(20, 12);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

// Initialize when page loads
init();
