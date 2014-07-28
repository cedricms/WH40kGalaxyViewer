var segmentums = new Array();

function showHideSegmentum(segmentumCheckbox) {
  var segmentumCheckboxValue = segmentumCheckbox.value;
  var segmentumCheckboxSplit = segmentumCheckboxValue.split("_");
  var segmentumName = segmentumCheckboxSplit[0];
  var segmentumShortName = segmentumName.replace(/ /g,'');
  var language = segmentumCheckboxSplit[1];
  /*var planetX = segmentumCheckboxSplit[2];
  var planetY = segmentumCheckboxSplit[3];
  var planetZ = segmentumCheckboxSplit[4];*/
  
  if (segmentumCheckbox.checked) {
    speakElementName(segmentumName, language);
	
    // texture
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
      console.log( item, loaded, total );
    };

    var texture = new THREE.Texture();

    var imageLoader = new THREE.ImageLoader( manager );
    imageLoader.load('./obj/segmentum/' + segmentumShortName + 'UV.png', function (image) {
      texture.image = image;
      texture.needsUpdate = true;
    } );

    // model
    var objLoader = new THREE.OBJLoader(manager);
    objLoader.load('./obj/segmentum/' + segmentumShortName + '.obj', function (object) {
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
	
      //planetSphereMesh.position.y = planetZ - 1;
	
      segmentums[segmentumName] = object;

      galaxy.add(object);
	} );
  }
  else {
    var segmentum = segmentums[segmentumName];
      
    galaxy.remove(segmentum);
  } // if
}