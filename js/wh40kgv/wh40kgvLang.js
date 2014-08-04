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
	  // Main page
      jQuery.i18n.prop('aboutButtonMessage');
      document.getElementById('aboutButton').innerHTML = '<i class="fa fa-info-circle fa-lg"></i>&nbsp;' + aboutButtonMessage;
      jQuery.i18n.prop('helpButtonMessage');
      document.getElementById('helpButton').innerHTML = '<i class="fa fa-question-circle fa-lg"></i>&nbsp;' + helpButtonMessage;
      jQuery.i18n.prop('followMeButtonMessage');
      document.getElementById('followMeButton').innerHTML = followMeButtonMessage + '&nbsp;<span class="caret"></span>';
      jQuery.i18n.prop('mySiteButtonMessage');
      document.getElementById('mySiteButton').innerHTML = '<i class="fa fa-home fa-lg"></i>&nbsp;' + mySiteButtonMessage;
      jQuery.i18n.prop('languagesParameterMessage');
      document.getElementById('languagesParameter').innerHTML = '<i class="fa fa-flag"></i>&nbsp;' + languagesParameterMessage;
	  
	  // Dialogs
	  jQuery.i18n.prop('closeButtonMessage');
      document.getElementById('closeButton').innerHTML = closeButtonMessage;
	  
	  // About dialog
      jQuery.i18n.prop('aboutModalTitleMessage');
      document.getElementById('aboutModalTitle').innerHTML = aboutModalTitleMessage;
      jQuery.i18n.prop('aboutDiscriptionMessage');
      document.getElementById('aboutDiscription').innerHTML = aboutDiscriptionMessage;
      jQuery.i18n.prop('aboutFanMessage');
      document.getElementById('aboutFan').innerHTML = aboutFanMessage;
	  
    }
  });
}