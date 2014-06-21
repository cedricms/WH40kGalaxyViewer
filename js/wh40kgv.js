var renderer, scene, camera;
var galaxy;
var galaxySize;
var mouseControls;
var loader = new THREE.JSONLoader();

function loadGalaxyViewer() {
  // Initialize the render engin
  renderer = Detector.webgl? new THREE.WebGLRenderer({antialias: true}): new THREE.CanvasRenderer({antialias: true});
  renderer.shadowMapType = THREE.PCFSoftShadowMap;

  // Ig WebGL doesn't work in the nvaigator, we can instead use a canvas
  // renderer = new THREE.CanvasRenderer();
  var viewerWidth= 800;
  var viewerHeight= 600;
  renderer.setSize( viewerWidth, viewerHeight);
  document.getElementById('galaxyViewer').appendChild(renderer.domElement);

  // Initialize the scene
  scene = new THREE.Scene();

  // Initialize the the camera and put it in the scene
  camera = new THREE.PerspectiveCamera(50, viewerWidth / viewerHeight, 1, 5000);
  camera.position.set(0, 150, 0);
  camera.rotation.x = -90 * Math.PI / 180
  scene.add(camera);
  
  galaxySize = 120;
  galaxy = initUniverseGeometry();
  scene.add(galaxy);
  
  // Initialize controls
  mouseControls = new THREE.OrbitControls(camera);
  mouseControls.addEventListener('change', renderer);

  // Render the scene
  renderer.render(scene, camera);
  animate();
}

function animate() {
  // Rotate galaxy
  if (galaxy.rotation.y <= -360 * Math.PI / 180) {
    galaxy.rotation.y = 0;
  } // if
  galaxy.rotation.y -= 0.1 * Math.PI / 180
  
  // Controls
  //mouseControls.update();
  
  requestAnimationFrame(animate);
  render();
}

function render() {
  //TWEEN.update();
  renderer.render(scene, camera);
}

/*function render() {
  animation.update(.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}*/

function initUniverseGeometry() {
  var universeGeometry = new THREE.Object3D();
  
  // Set up the grid
  var gridSize = galaxySize / 2;
  var step = 10;
  var gridHelper = new THREE.GridHelper(gridSize, step);

  gridHelper.position = new THREE.Vector3( 0, 0, 0 );
  gridHelper.rotation = new THREE.Euler( 0, 0, 0 );
  universeGeometry.add( gridHelper );
		
  // Set up scene elements
  /*var geometry = new THREE.SphereGeometry(1, 8, 8);
  var material = new THREE.MeshLambertMaterial({color: 0xffff00});
  var mesh = new THREE.Mesh(geometry, material);
  universeGeometry.add(mesh);*/
  
  // Add galaxy
  
  // Add seperate stars
  var seperateStars = generateSeperateStars();
  universeGeometry.add(seperateStars);
  
  // Set up scene background sphere
  var backgroundSphereGeometry = new THREE.SphereGeometry(1000, 32, 32);
  //changeFaceOrientation(backgroundSphereGeometry);
  var backgroundSphereMaterial = new THREE.MeshBasicMaterial({
                                                               map: THREE.ImageUtils.loadTexture('./img/texture/starmap_4096_2048.png')
                                                             });
  var backgroundSphereMesh = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial);
  backgroundSphereMesh.scale.x = -1;
  universeGeometry.add(backgroundSphereMesh);
  
  // Set up lighting
  var lightAltitude = 300;
  
  var topLight = new THREE.DirectionalLight(0xffffff, 1.0);
  topLight.position.set(0, lightAltitude, 0);
  topLight.shadowMapWidth = 1024;
  topLight.shadowMapHeight = 1024;
  universeGeometry.add(topLight);
  
  var bottomLight = new THREE.DirectionalLight(0xffffff, 1.0);
  bottomLight.position.set(0, -1 * lightAltitude, 0);
  bottomLight.shadowMapWidth = 1024;
  bottomLight.shadowMapHeight = 1024;
  universeGeometry.add(bottomLight);
  
  return universeGeometry;
}

function generateSeperateStars() {
  var starGroup = new THREE.Object3D();
  var maxStarSize = 3;
  var maxStarMaterialCounter = 8;
  
  var starMaterials = new Array();
  starMaterials[1] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_01_64_64.png')
                                                   });
  starMaterials[2] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_02_64_64.png')
                                                   });
  starMaterials[3] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_03_64_64.png')
                                                   });
  starMaterials[4] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_04_64_64.png')
                                                   });
  starMaterials[5] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_05_64_64.png')
                                                   });
  starMaterials[6] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_06_64_64.png')
                                                   });
  starMaterials[7] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_07_64_64.png')
                                                   });
  starMaterials[8] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_08_64_64.png')
                                                   });
  
  var maxStarDistance = 300;

  var starMaterialCounter = 1;
  for (var i = 0; i < 100; i++) {
    var star = new THREE.Object3D();
	var starX = Math.random() * maxStarDistance - (maxStarDistance / 2);
	starX = clampStarPosition(starX);
	var starY = Math.random() * maxStarDistance - (maxStarDistance / 2);
	starY = clampStarPosition(starY);
	var starZ = Math.random() * maxStarDistance - (maxStarDistance / 2);
	starZ = clampStarPosition(starZ);
	
	var starSize = Math.random() * maxStarSize;
    var starGeometry = new THREE.PlaneGeometry(starSize, starSize);
	
	if (starMaterialCounter > maxStarMaterialCounter) {
	  starMaterialCounter = 1;
	} // if
	var starMaterial = starMaterials[starMaterialCounter];
	starMaterialCounter++;
	
    var starXFace = new THREE.Mesh(starGeometry, starMaterial);
    starXFace.position.x = starX;
    starXFace.position.y = starY;
    starXFace.position.z = starZ;
    var starBackXFace = new THREE.Mesh(starGeometry, starMaterial);
    starBackXFace.position.x = starX;
    starBackXFace.position.y = starY;
    starBackXFace.position.z = starZ;
	
    var starYFace = new THREE.Mesh(starGeometry, starMaterial);
    starYFace.position.x = starX;
    starYFace.position.y = starY;
    starYFace.position.z = starZ;
	
    var starBackYFace = new THREE.Mesh(starGeometry, starMaterial);
    starBackYFace.position.x = starX;
    starBackYFace.position.y = starY;
    starBackYFace.position.z = starZ;
	
    var starZFace = new THREE.Mesh(starGeometry, starMaterial);
    starZFace.position.x = starX;
    starZFace.position.y = starY;
    starZFace.position.z = starZ;
	
    var starBackZFace = new THREE.Mesh(starGeometry, starMaterial);
    starBackZFace.position.x = starX;
    starBackZFace.position.y = starY;
    starBackZFace.position.z = starZ;

    starXFace.rotation.x = 180 * (Math.PI / 180);
    starYFace.rotation.y = 90 * (Math.PI / 180);
    starBackYFace.rotation.y = 270 * (Math.PI / 180);
    starZFace.rotation.z = 90 * (Math.PI / 180);
    starBackZFace.rotation.z = 270 * (Math.PI / 180);

	star.add(starXFace);
	star.add(starBackXFace);
	star.add(starYFace);
	star.add(starBackYFace);
	star.add(starZFace);
	star.add(starBackZFace);
	
    starGroup.add(star);
  } // for

  return starGroup;
}

function clampStarPosition(position) {
  var clampedPosition = 0;
  var minStarPosition = 30;
  
  if (position > 0) {
    clampedPosition = position + minStarPosition;
  }
  else if (position < 0) {
    clampedPosition = position - minStarPosition;
  }
  else {
    var seed = Math.random() - 0.5;
	clampedPosition = clampStarPosition(minStarPosition * seed);
  } // if
  
  return clampedPosition;
}