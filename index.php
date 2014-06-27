<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="C&eacute;dric Maria-Sube" />
    <meta name="category" content="Warhammer 40000 galaxy viewer" />
    <meta name="copyright" content="C&eacute;dric Maria-Sube" />
    <meta name="description" content="Warhammer 40000 galaxy viewer" />
    <meta name="keywords" content="Games Workshop, Warhammer 40000, galaxy, viewer" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" />
    <link rel="shortcut icon" type="image/x-icon" href="./img/favicon.ico" />
    <link rel="icon" type="image/png" href="./img/favicon.png" />
    <link rel="apple-touch-icon" href="./img/apple-touch-icon.png" />

    <title>Warhammer 40000 Galaxy Viewer</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="css/wh40kgv.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="./wh40kGalaxyViewer.php">Warhammer 40000 Galaxy Viewer</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#aboutModal"><i class="fa fa-info-circle fa-lg"></i>&nbsp;About</button></li>
                    <li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#aboutModal"><i class="fa fa-question-circle fa-lg"></i>&nbsp;Help</button></li>
                    <li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#contactModal"><i class="fa fa-envelope-square fa-lg"></i>&nbsp;Contact</button></li>
					<li><a href="https://plus.google.com/+C&eacute;dricMariaSube" target="_blank"><i class="fa fa-google-plus fa-lg"></i>&nbsp;Google+</a></li>
					<li><a href="https://twitter.com/cedricmariasube" target="_blank"><i class="fa fa-twitter fa-lg"></i>&nbsp;Twitter</a></li>
					<li><a href="https://github.com/cedricms" target="_blank"><i class="fa fa-github fa-lg"></i>&nbsp;GitHub</a></li>
					<li><a href="https://trello.com/b/50klIQc8/wh40kgalaxyviewer" target="_blank"><i class="fa fa-trello fa-lg"></i>&nbsp;Trello</a></li>
					<li><a href="http://www.cedric.maria-sube.com/" target="_blank"><i class="fa fa-home fa-lg"></i>&nbsp;My site</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
	<!--
	  Include about modal here
	-->
	<!--
	  Include contact modal here
	-->
	
    <div class="container">
      <div class="row">
        <div class="col-lg-2 elementListPanel">
		  <form role="form">
            <div class="panel-group" id="elementListAccordion">
              <!--div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#elementListAccordion" href="#collapseEldar">
                      Eldar
                    </a>
                  </h4>
                </div>
                <div id="collapseEldar" class="panel-collapse collapse">
                  <div class="panel-body">
                    <div class="list-group">
                      <a href="#" class="list-group-item">Alaitoc</a>
                      <a href="#" class="list-group-item">Altansar</a>
                      <a href="#" class="list-group-item">Biel-tan</a>
                      <a href="#" class="list-group-item">IL-Kaithe</a>
                      <a href="#" class="list-group-item">Iyanden</a>
                      <a href="#" class="list-group-item">Iybraesil</a>
                      <a href="#" class="list-group-item">Kaelor</a>
                      <a href="#" class="list-group-item">Lugganath</a>
                      <a href="#" class="list-group-item">Mymeara</a>
                      <a href="#" class="list-group-item">Saim-Hann</a>
                      <a href="#" class="list-group-item">Ulthw&eacute;</a>
                      <a href="#" class="list-group-item">Yme-Loc</a>
                    </div>
                  </div>
                </div>
              </div-->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#elementListAccordion" href="#collapseImperium">
                      Imperium
                    </a>
                  </h4>
                </div>
                <div id="collapseImperium" class="panel-collapse collapse">
                  <div class="panel-body">
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Baal_fr-FR"> Baal
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Caliban_en-US"> Caliban
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Catachan_fr-FR"> Catachan
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Fenris_en-US"> Fenris
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Mars_en-US"> Mars
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Terra_en-US"> Terra
                        </label>
					  </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#elementListAccordion" href="#collapseOrks">
                      Orks
                    </a>
                  </h4>
                </div>
                <div id="collapseOrks" class="panel-collapse collapse">
                  <div class="panel-body">
                    <a href="#" class="list-group-item">Charadon</a>
			        <a href="#" class="list-group-item">Octarius</a>
                  </div>
                </div>
              </div>
	   		  <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#elementListAccordion" href="#collapseTau">
                      Tau
                    </a>
                  </h4>
                </div>
                <div id="collapseTau" class="panel-collapse collapse">
                  <div class="panel-body">
                    <a href="#" class="list-group-item">Bork'an</a>
			        <a href="#" class="list-group-item">Dal'yth</a>
			        <a href="#" class="list-group-item">D'yanoi</a>
			        <a href="#" class="list-group-item">Fal'shia</a>
			        <a href="#" class="list-group-item">Sa'cea</a>
                    <a href="#" class="list-group-item">Vior'la</a>
                    <a href="#" class="list-group-item">Pech</a>
                    <a href="#" class="list-group-item">T'au</a>
                    <a href="#" class="list-group-item">Tau'n</a>
	  	            <a href="#" class="list-group-item">Vespid</a>
                  </div>
                </div>
              </div-->
            </div>
		  </form>
        </div>
        <div class="col-lg-10 text-center viewerPanel">
	        <div id="galaxyViewer"></div>
        </div>
      </div>
    </div>
    <!-- /.container -->

    <!-- JavaScript -->
    <script src="./js/jquery-1.11.1.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
	<script src="./js/three.min.js"></script>
	<script src="./js/Detector.js"></script>
	<script src="./js/controls/OrbitControls.js"></script>
	<script src="./js/loaders/OBJLoader.js"></script>
	<!--script src="http://code.createjs.com/tweenjs-0.5.1.min.js"></script-->
	<script src="./js/wh40kgv.js"></script>
	
	<script>
	  // Galaxy viewer initialization
	  loadGalaxyViewer();
	</script>
	
</body>

</html>
