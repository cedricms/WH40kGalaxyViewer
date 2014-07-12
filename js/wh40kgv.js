var renderer, scene, camera;
var galaxy;
var galaxySize;
var mouseControls;
var loader = new THREE.JSONLoader();

var planets = new Array();

function loadGalaxyViewer() {
  // Initialize the render engin
  renderer = Detector.webgl? new THREE.WebGLRenderer({antialias: false}): new THREE.CanvasRenderer({antialias: false});
  //renderer = Detector.webgl? new THREE.WebGLRenderer({antialias: true}): new THREE.CanvasRenderer({antialias: true});
  //renderer.shadowMapType = THREE.PCFSoftShadowMap;

  // If WebGL doesn't work in the nvaigator, we can instead use a canvas
  // renderer = new THREE.CanvasRenderer();
  /*var viewerWidth= 800;
  var viewerHeight= 600;*/
  var viewerWidth= window.innerWidth * 0.55;
  var viewerHeight= window.innerHeight * 0.7;
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
  // Controls
  //mouseControls.update();
  
  requestAnimationFrame(animate);
  render();
  
  TWEEN.update();
}

function render() {
  renderer.render(scene, camera);
}

function initUniverseGeometry() {
  var universeGeometry = new THREE.Object3D();
  
  // Set up the grid
  var gridSize = galaxySize / 2;
  var step = 10;
  var gridHelper = new THREE.GridHelper(gridSize, step);

  gridHelper.position = new THREE.Vector3( 0, 0, 0 );
  gridHelper.rotation = new THREE.Euler( 0, 0, 0 );
  universeGeometry.add( gridHelper );
  
  // Add galaxy
  loadGalaxyModel(universeGeometry);
  
  // Add seperate stars
  var seperateStars = generateSeperateStars();
  universeGeometry.add(seperateStars);
  
  // Set up scene background sphere
  var backgroundSphereGeometry = new THREE.SphereGeometry(1000, 32, 32);
  //changeFaceOrientation(backgroundSphereGeometry);
  var backgroundSphereMaterial = new THREE.MeshBasicMaterial({
                                                               map: THREE.ImageUtils.loadTexture('./img/texture/starmap_4096_2048.png'),
															   wireframe: false, overdraw: true
                                                             });
  var backgroundSphereMesh = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial);
  backgroundSphereMesh.scale.x = -1;
  universeGeometry.add(backgroundSphereMesh);
  
  // Set up lighting
  var lightAltitude = 300;
  
  var shadowMapSize = 512;
  
  var topLight = new THREE.DirectionalLight(0xffffff, 1.0);
  topLight.position.set(0, lightAltitude, 0);
  topLight.shadowMapWidth = shadowMapSize;
  topLight.shadowMapHeight = shadowMapSize;
  universeGeometry.add(topLight);
  
  var bottomLight = new THREE.DirectionalLight(0xffffff, 1.0);
  bottomLight.position.set(0, -1 * lightAltitude, 0);
  bottomLight.shadowMapWidth = shadowMapSize;
  bottomLight.shadowMapHeight = shadowMapSize;
  universeGeometry.add(bottomLight);
  
  setupGalaxyTween();
  
  return universeGeometry;
}

function setupGalaxyTween() {
  var galaxyRotation = {y: 0};
  var targetRotation = {y: -360 * Math.PI / 180};
  var galaxyRotationDuration = 200 * 1000;
  var tweenGalaxy = new TWEEN.Tween(galaxyRotation).to(targetRotation, galaxyRotationDuration);

  tweenGalaxy.onUpdate(function(){
    galaxy.rotation.y = galaxyRotation.y;
  });
  
  tweenGalaxy.onComplete( function () {
    galaxyRotation.y = 0;
    tweenGalaxy.start();
  } );

  TWEEN.removeAll();
  
  tweenGalaxy.start();
}

function generateSeperateStars() {
  var starGroup = new THREE.Object3D();
  var maxStarSize = 1.7;
  var maxStarMaterialCounter = 4;
  
  var starMaterials = new Array();
  starMaterials[1] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_01_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[2] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_02_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[3] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_03_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[4] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_04_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  /*starMaterials[5] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_05_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[6] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_06_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[7] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_07_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });
  starMaterials[8] = new THREE.MeshBasicMaterial({
                                                     map: THREE.ImageUtils.loadTexture('./img/texture/star/star_08_64_64.png'),
													 transparent: true,
													 wireframe: false
                                                   });*/
  
  var maxStarDistance = 80;

  var starMaterialCounter = 1;
  for (var i = 0; i < 35; i++) {
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

    starXFace.rotation.x = 90 * (Math.PI / 180);
    starBackXFace.rotation.x = 270 * (Math.PI / 180);
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
  var minStarPosition = 10;
  
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

function loadGalaxyModel(parentGroup) {
  // texture
  var manager = new THREE.LoadingManager();
  manager.onProgress = function ( item, loaded, total ) {
    console.log( item, loaded, total );
  };

  var texture = new THREE.Texture();

  var imageLoader = new THREE.ImageLoader( manager );
  imageLoader.load('./obj/galaxy/MilkyWay_512_512.png', function (image) {
    texture.image = image;
    texture.needsUpdate = true;
  } );

  // model
  var objLoader = new THREE.OBJLoader(manager);
  objLoader.load('./obj/galaxy/Galaxy.obj', function (object) {
    object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        child.material.map = texture;
		child.material.transparent = true;
		child.material.wireframe = false;
		child.material.overdraw = false;
	  } // if
    } );

    //object.position.y = - 80;
	
	var scaleFactor = 13;
	object.scale.set(scaleFactor, scaleFactor, scaleFactor);
	
    parentGroup.add(object);
  } );
}

function showHideGalaxyElement(galaxyElementCheckbox) {
  var galaxyElementCheckboxValue = galaxyElementCheckbox.value;
  var galaxyElementCheckboxSplit = galaxyElementCheckboxValue.split("_");
  var planetName = galaxyElementCheckboxSplit[0];
  var language = galaxyElementCheckboxSplit[1];
  var planetX = galaxyElementCheckboxSplit[2];
  var planetY = galaxyElementCheckboxSplit[3];
  var planetZ = galaxyElementCheckboxSplit[4];
  var planetAffiliation = galaxyElementCheckboxSplit[5];
  var planetSpotConeColor = getColorAffiliation(planetAffiliation);
  
  if (galaxyElementCheckbox.checked) {
    speakGalaxyElementName(planetName, language);
	
	var planetSpotConeHeight = planetZ;
	var planetSpotConeMaterial = new THREE.MeshBasicMaterial( {color: planetSpotConeColor, opacity: 0.5, transparent: true} );
	var planetSpotCone = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 0, planetSpotConeHeight, 16, 16, true), planetSpotConeMaterial);
	planetSpotCone.position.x = planetX;
    planetSpotCone.position.z = planetY;
    planetSpotCone.position.y = planetZ / 2 + 1.5;
    planetSpotCone.overdraw = true;
    
    var planetSize = 5;
    var planetDetail = 16;
    var planetSphereGeometry = new THREE.SphereGeometry(planetSize, planetDetail, planetDetail);
    var planetSphereMaterial = new THREE.MeshBasicMaterial({
                                                               map: THREE.ImageUtils.loadTexture('./img/texture/planet/' + planetName + '.jpg'),
															   wireframe: false, overdraw: false, opacity: 0.75, transparent: true
                                                             });
    var planetSphereMesh = new THREE.Mesh(planetSphereGeometry, planetSphereMaterial);
    /*planetSphereMesh.position.x = planetX;
    planetSphereMesh.position.z = planetY;*/
    planetSphereMesh.position.y = planetZ - 1;
      
    planets[planetName] = planetSpotCone;
	planetSpotCone.add(planetSphereMesh);

    galaxy.add(planetSpotCone);
  }
  else {
    var planet = planets[planetName];
      
    galaxy.remove(planet);
  } // if
}

function getColorAffiliation(planetAffiliation) {
  var planetColor;
  if ('Imperium' === planetAffiliation) {
    planetColor =  0x6666ff;
  } // if
  
  return planetColor;
}

var voiceEmitter = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

function speakGalaxyElementName(galaxyElementName, galaxyElementLanguage) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
	if (voiceEmitter === undefined) {
	  // Speech synthesis is not supported
	}
	else {
      // Synthesis support. Make your web apps talk!
      voiceEmitter.voice = voices[10]; // Note: some voices don't support altering params
      voiceEmitter.voiceURI = 'native';
      voiceEmitter.volume = 1; // 0 to 1
      voiceEmitter.rate = 5; // 0.1 to 10
      voiceEmitter.pitch = 2; //0 to 2
      voiceEmitter.text = galaxyElementName;
      voiceEmitter.lang = galaxyElementLanguage;

      voiceEmitter.onEnd = function(event) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };
  
      voiceEmitter.onerror = function(event) {
        console.log('Error ' + event);
      };

      window.speechSynthesis.speak(voiceEmitter);
	} // if
  } // if
}