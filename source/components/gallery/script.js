( function($) {

  'use strict';
  
  $( function() {
  
    $.fn.gallery = function( options ) {
    
      var defaults = {
            className: 'b-gallery',
            effect: 'slide'
          };
          
      options = $.extend( {}, defaults, options || {} );
      
      return this.each( function() {
        
        var $this = $( this ),
            $imgs = $this.find( 'img' ),
            $items,
            $images = $( '<div class="' + options.className + '__images"></div>' ),
            $belt = $( '<div class="' + options.className + '__belt"></div>' ),
            $nav,
            num = $imgs.length;
        
        function render() {
          //belt
          $this.append( $images );
          $images.append( $belt );
          $belt.width( num * 100 + '%' );
          
          //nav
          $nav = $( '<nav class="' + options.className + '__nav"></nav>' );
          $this.append( $nav );
          
          //items
          $imgs.each( function( index ) {
            var $img = $( this ),
                $item = $( '<div class="' + options.className + '__i" data-index="' + index + '"></div>' ),
                $navItem = $( '<a href="#" class="' + options.className + '__nav__i" data-index="' + index + '"></a>' );
            
            $item.width( 100 / num + '%' );
            $item.append( $img );
            $belt.append( $item );
            $nav.append( $navItem );
          });
          
          $nav.find( 'a:first' ).addClass( 'i-active' );
          $items = $this.find( '.' + options.className + '__i' );
        }
        
        function highlightNav( $navItem ) {
          $nav.find( '.i-active' ).removeClass( 'i-active' );
          $navItem.addClass( 'i-active' );
        }
        
        //navigation
        function navigate( index ) {
          var position = index * 100;
          
          if ( options.effect === 'slide' ) {
            $belt.css({
              marginLeft: -position + '%'
            });
            return;
          }
          
          if ( options.effect === 'scale' ) {
            var $item;
            
            $items.each( function() {
              var $el = $( this );
              if ( $el.data( 'index' ) === index ) {
                $item = $el;
              }
            });
            
            $items.filter( '.i-scale' ).removeClass( 'i-scale' );
            $item.prev().addClass( 'i-scale' );
            
            $belt.css({
              marginLeft: -position + '%'
            });
            
            return;
          }
        }
        
        function next() {
          var $next = $nav.children( '.i-active' ).next().length ?
                      $nav.children( '.i-active' ).next() :
                      $nav.children( 'a:first' );
                      
          $next.click();
        }
        
        //events
        function clickNav(e) {
          e.preventDefault();
          
          var $navItem = $( e.target ),
              index = $navItem.data( 'index' );
          
          if ( $navItem.hasClass( 'i-active' )) {
            return;
          }
          
          highlightNav( $navItem );
          navigate( index );
        }
        
        function clickImg() {
          next();
        }
        
        function handleEvents() {
          $nav.delegate( '.' + options.className + '__nav__i', 'click', clickNav );
          $images.delegate( 'img', 'click', clickImg );
        }
            
        function init() {
          render();
          handleEvents();
        }
        
        init();
        
      });
    };
    
    $( '.b-gallery' ).gallery({
      effect: 'scale'
    });
  });

}( jQuery ));