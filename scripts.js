// external js: masonry.pkgd.js

var $grid = $('.grid_images').masonry({
    columnWidth: 160,
    itemSelector: '.grid-item'
  });
  
  function Add_ass(){
    var elems = [ getItemElement(), getItemElement(), getItemElement() ];
    // make jQuery object
    var $elems = $( elems );
    $grid.append( $elems ).masonry( 'appended', $elems );
  }
  
  // create <div class="grid-item"></div>
  function getItemElement() {
    var elem = document.createElement('div');
    var wRand = Math.random();
    var hRand = Math.random();
    var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
    var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
    elem.className = 'grid-item--height2';
    return elem;
  }
  