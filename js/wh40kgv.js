var renderer, scene, camera;
var galaxy;
var galaxySize;
var mouseControls;
var loader = new THREE.JSONLoader();

function loadGalaxyViewer() {
  // Initialize the render engin
  renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();

  // Ig WebGL doesn't work in the nvaigator, we can instead use a canvas
  // renderer = new THREE.CanvasRenderer();
  var viewerWidth= 800;
  var viewerHeight= 600;
  renderer.setSize( viewerWidth, viewerHeight);
  document.getElementById('galaxyViewer').appendChild(renderer.domElement);

  // Initialize the scene
  scene = new THREE.Scene();

  // Initialize the the camera and put it in the scene
  camera = new THREE.PerspectiveCamera(50, viewerWidth / viewerHeight, 1, 475);
  camera.position.set(0, 150, 0);
  camera.rotation.x = -90 * Math.PI / 180
  scene.add(camera);
  
  galaxySize = 120;
  galaxy = initGalaxyGeometry();
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

function initGalaxyGeometry() {
  var galaxyGeometry = new THREE.Object3D();
  
  // Set up the grid
  var gridSize = galaxySize / 2;
  var step = 10;
  var gridHelper = new THREE.GridHelper(gridSize, step);

  gridHelper.position = new THREE.Vector3( 0, 0, 0 );
  gridHelper.rotation = new THREE.Euler( 0, 0, 0 );
  galaxyGeometry.add( gridHelper );
		
  // Set up scene elements
  var geometry = new THREE.SphereGeometry(1, 8, 8);
  var material = new THREE.MeshLambertMaterial( { color: 0xffff00} );
  var mesh = new THREE.Mesh(geometry, material);
  galaxyGeometry.add(mesh);
  
  // Set up scene background sphere
  var backgroundSphereGeometry = new THREE.SphereGeometry(300, 32, 32);
  //changeFaceOrientation(backgroundSphereGeometry);
  var backgroundSphereMaterial = new THREE.MeshBasicMaterial({
                                                               map: THREE.ImageUtils.loadTexture('./img/texture/starmap_4096_2048.png')
                                                             });
  var backgroundSphereMesh = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial);
  backgroundSphereMesh.scale.x = -1;
  galaxyGeometry.add(backgroundSphereMesh);
  
  // Set up lighting
  var lightAltitude = 300;
  
  var topLight = new THREE.DirectionalLight(0xffffff, 1.0);
  topLight.position.set(0, lightAltitude, 0);
  galaxyGeometry.add(topLight);
  
  var bottomLight = new THREE.DirectionalLight(0xffffff, 1.0);
  bottomLight.position.set(0, -1 * lightAltitude, 0);
  galaxyGeometry.add(bottomLight);
  
  return galaxyGeometry;
}

function changeFaceOrientation(geometry){
  for(var i = 0;i<geometry.faces.length;i++){
    var face = geometry.faces[ i ];
    if ( face instanceof THREE.Face3 ) {
      var tmp = face.b;
      face.b = face.c;
      face.c = tmp;
    }
	else if ( face instanceof THREE.Face4 ) {
      var tmp = face.b;
      face.b = face.d;
      face.d = tmp;                
    } // if
  } // for

  geometry.computeCentroids();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();   
}