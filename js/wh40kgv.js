var renderer, scene, camera;
var galaxy;
var loader = new THREE.JSONLoader();

function loadGalaxyViewer() {
  // Initialize the render engin
  renderer = new THREE.WebGLRenderer();

  // Ig WebGL doesn't work in the nvaigator, we can instead use a canvas
  // renderer = new THREE.CanvasRenderer();
  var viewerWidth= 800;
  var viewerHeight= 600;
  renderer.setSize( viewerWidth, viewerHeight);
  document.getElementById('galaxyViewer').appendChild(renderer.domElement);

  // Initialize the scene
  scene = new THREE.Scene();

  // Initialize the the camera and put it in the scene
  camera = new THREE.PerspectiveCamera(50, viewerWidth / viewerHeight, 1, 4000 );
  camera.position.set(0, 2500, 0);
  camera.rotation.x = -90 * Math.PI / 180
  scene.add(camera);
  
  galaxy = initGalaxyGeometry();
  scene.add(galaxy);

  // Render the scene
  renderer.render(scene, camera);
  animate();
}

function animate() {
  // Rotate galaxy
  if (galaxy.rotation.y < -360 * Math.PI / 180) {
    galaxy.rotation.y = 0;
  } // if
  galaxy.rotation.y -= 0.1 * Math.PI / 180
  
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
  var gridSize = 1000;
  var step = 100;
  var gridHelper = new THREE.GridHelper(gridSize, step);

  gridHelper.position = new THREE.Vector3( 0, 0, 0 );
  gridHelper.rotation = new THREE.Euler( 0, 0, 0 );
  galaxyGeometry.add( gridHelper );
		
  // Set up scene elements
  var geometry = new THREE.SphereGeometry(100, 8, 8);
  var material = new THREE.MeshLambertMaterial( { color: 0xffff00} );
  mesh = new THREE.Mesh( geometry, material );
  galaxyGeometry.add( mesh );
  
  // Set up lighting
  var light = new THREE.DirectionalLight(0xffffff, 1.0);
  light.position.set(0, 1000, 0);
  galaxyGeometry.add(light);
  
  return galaxyGeometry;
}