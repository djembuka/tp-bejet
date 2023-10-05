( function($) {

  'use strict';
  
  $( function() {
    
    $( window ).scroll( function() {
      var top = $( document ).scrollTop() + parseInt( window.screen.height ) - 350;
      
      $( '.b-blog-list .row' ).each( function() {
        if ( $( this ).offset().top < top ) {
          $( this ).addClass( 'i-animate' );
        }
      });
      
    }).scroll();
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));