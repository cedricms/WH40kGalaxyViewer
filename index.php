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

    <title>Warhammer 40000 Galaxy Viewer [Beta]</title>

    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/simple-sidebar.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="./css/wh40kgv.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="galaxyElementsToggle">
			<a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><i class="fa fa2 fa-align-justify"></i> Factions</a>
		</div>
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
				<div>
					<div class="titleBar">				
						<a class="navbar-brand" href="#">Warhammer 40000 Galaxy Viewer [Beta]</a>
					</div>
				</div>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#aboutModal"><i class="fa fa-info-circle fa-lg"></i>&nbsp;About</button></li>
                    <li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#aboutModal"><i class="fa fa-question-circle fa-lg"></i>&nbsp;Help</button></li>
                    <!--li><button class="btn btn-default banner-button" data-toggle="modal" data-target="#contactModal"><i class="fa fa-envelope-square fa-lg"></i>&nbsp;Contact</button></li-->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Follow me <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="https://plus.google.com/+C&eacute;dricMariaSube" target="_blank"><i class="fa fa-google-plus fa-lg"></i>&nbsp;Google+</a></li>
							<li><a href="https://twitter.com/cedricmariasube" target="_blank"><i class="fa fa-twitter fa-lg"></i>&nbsp;Twitter</a></li>
            				<li><a href="https://github.com/cedricms" target="_blank"><i class="fa fa-github fa-lg"></i>&nbsp;GitHub</a></li>
            				<li><a href="http://www.cedric.maria-sube.com/" target="_blank"><i class="fa fa-home fa-lg"></i>&nbsp;My site</a></li>
          				</ul>
        			</li>
					<li><a href="https://trello.com/b/50klIQc8/wh40kgalaxyviewer" target="_blank"><i class="fa fa-trello fa-lg"></i>&nbsp;Trello</a></li>
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
	
	<div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <form role="form" class="sidebar-nav elementListPanel">
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
				    <!--<div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Baal_fr-FR"> Baal
                        </label>
					  </div>
                    </div-->
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Cadia_en-US_-24_33_10_Imperium"> <i class="fa fa-globe"></i> Cadia
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Caliban_en-US_-37_37_15_Imperium"> <i class="fa fa-globe"></i> Caliban
                        </label>
					  </div>
                    </div>
				    <!--div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Catachan_fr-FR"> Catachan
                        </label>
					  </div>
                    </div>-->
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Deliverance_en-US_35_15_15_Imperium"> <i class="fa fa-globe"></i> Deliverance
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Fenris_en-US_-17_23_15_Imperium"> <i class="fa fa-globe"></i> Fenris
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Macragge_en-US_33_-42_15_Imperium"> <i class="fa fa-globe"></i> Macragge
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Mars_en-US_0_30_10_Imperium"> <i class="fa fa-globe"></i> Mars
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Nocturne_en-US_15_15_15_Imperium"> <i class="fa fa-globe"></i> Nocturne
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Rynn's World_en-US_45_5_15_Imperium"> <i class="fa fa-globe"></i> Rynn's World
                        </label>
					  </div>
                    </div>
					<div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideSegmentum(this);" value="Segmentum Obscurus_en-US"> <i class="fa fa-cube"></i> Segmentum Obscurus
                        </label>
					  </div>
                    </div>
					<div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideSegmentum(this);" value="Segmentum Pacificus_en-US"> <i class="fa fa-cube"></i> Segmentum Pacificus
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideSegmentum(this);" value="Segmentum Solar_en-US"> <i class="fa fa-cube"></i> Segmentum Solar
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Tallarn_en-US_17_17_10_Imperium"> <i class="fa fa-globe"></i> Tallarn
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Terra_en-US_0_30_20_Imperium"> <i class="fa fa-globe"></i> Terra
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Valhalla_en-US_-20_5_10_Imperium"> <i class="fa fa-globe"></i> Valhalla
                        </label>
					  </div>
                    </div>
				    <div class="list-group-item">
				      <div class="checkbox">
                        <label>
                          <input type="checkbox" onclick="showHideSegmentum(this);" value="Ultima Segmentum_en-US"> <i class="fa fa-cube"></i> Ultima Segmentum
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
	
    <!--div class="container">
      <div class="row">
        <div class="col-lg-3 elementListPanel">
		  
        </div>
        <div class="col-lg-9 text-center viewerPanel" id="viewerPanel">
	        
        </div>
      </div>
    </div-->
    <!-- /.container -->
	  <div id="galaxyViewer"></div>
    </div>
	<!-- /.wrapper -->
	
    <!-- JavaScript -->
    <script src="./js/jquery-1.11.1.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
	<script src="./js/polyfill/typedarray.js"></script>
	<script src="./js/three.min.js"></script>
	<script src="./js/tween.min.js"></script>
	<script src="./js/Detector.js"></script>
	<script src="./js/controls/OrbitControls.js"></script>
	<!--script src="./js/controls/TrackballControls.js"></script-->
	<script src="./js/loaders/OBJLoader.js"></script>
	<script src="./js/wh40kgv/wh40kgv.js"></script>
	<script src="./js/wh40kgv/wh40kgvSegmentum.js"></script>
	
    <!-- Menu Toggle Script -->
    <script>
		$("#menu-toggle").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});
	
		$("#wrapper").toggleClass("toggled");
    </script>
	
	<script>
	  // Galaxy viewer initialization
	  loadGalaxyViewer();
	</script>
	
</body>

</html>
