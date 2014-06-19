var renderer, scene, camera;
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
  camera = new THREE.PerspectiveCamera(50, viewerWidth / viewerHeight, 1, 10000 );
  camera.position.set(0, 0, 3000);
  /*camera.rotation = new THREE.Euler(0, 1.57, -1.57);*/
  scene.add(camera);
  
  var gridSize = 1000;
  var step = 1;
  var gridHelper = new THREE.GridHelper(gridSize, step);

  gridHelper.position = new THREE.Vector3( 0, 0, 0 );
  gridHelper.rotation = new THREE.Euler( 0, 0, 0 );
  scene.add( gridHelper );
		
  // Set up scene elements
  var geometry = new THREE.SphereGeometry(10, 8, 8);
  var material = new THREE.MeshLambertMaterial( { color: 0xffff00} );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  // Set up lighting
  var lumiere = new THREE.DirectionalLight( 0xffffff, 1.0 );
  lumiere.position.set( 0, 0, 400 );
  scene.add( lumiere );

  // Render the scene
  renderer.render( scene, camera );
}

function render() {
  animation.update(.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}