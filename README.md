WH40kGalaxyViewer
=================

View all the cool places in the Warhammer 40000 galaxy.

Adding a planet :

1) Add and adapt the following code in index.php :

<div class="list-group-item">
  <div class="checkbox">
    <label>
      <input type="checkbox" onclick="showHideGalaxyElement(this);" value="Caliban_en-US_-37_37_15_Imperium"> <i class="fa fa-globe"></i> Caliban
    </label>
  </div>
</div>

The value of the input reads as following :
  1) Name of the planet;
  2) Language to use to read the name of the planet;
  3) X position;
  4) Y position;
  5) Z position;
  6) Faction (for now, only the Imperium is supported).

2) Add in the "img/texture/planet" directory a 512 by 256 pixel JPG texture for the planet.
