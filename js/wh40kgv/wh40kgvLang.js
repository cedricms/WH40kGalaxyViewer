function supportsHtml5Ttorage() {
  try {
	return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
	return false;
  }
}

function initLanguages() {
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.substring(0,2);
  var localStorageLanguage = userLang;
  
  if (supportsHtml5Ttorage()) {
	if((localStorage.getItem("localStorageLanguage") === null) || (localStorage.getItem("localStorageLanguage") === '')){
	  localStorage.setItem("localStorageLanguage", localStorageLanguage);
	} 
	else {
	  localStorageLanguage = localStorage.getItem("localStorageLanguage");
	} // if
  } // if
  loadBundles(localStorageLanguage);
  
  /*var settingForm = document.getElementById("settingForm");
  var languageSelect = settingForm.elements["language"];
  setSelectedOptionStringValue(languageSelect, localStorageLanguage);*/
}

function loadBundles(lang) {
  jQuery.i18n.properties({
	name:'wh40kgv', 
    path:'i18n/', 
	mode:'both',
	language:lang, 
	callback: function() {
      jQuery.i18n.prop('jeuCreeParMessage');
      document.getElementById('jeuCreePar').innerHTML = jeuCreeParMessage;
    }
  });
}