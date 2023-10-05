( function($) {

  'use strict';
  
  $( function() {
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
    
    // toggle content on click
    $('[data-toggle="collapse"]').click(function () {
        if ($(this).attr('data-start') == 'open') {
            $(this).html($(this).attr('data-close-text'));
        } else {
            $(this).html($(this).attr('data-open-text'));
        }
        $(this).attr('data-start', $(this).attr('data-start') == 'open' ? 'close' : 'open');
    });

    // set initial content
    $('[data-toggle="collapse"]').each(function () {
        if ($(this).attr('data-start') == "open") {
            $(this).html($(this).attr('data-open-text'));
        } else {
            $(this).html($(this).attr('data-close-text'));
        }
    });
    
    $( '.b-faq-answer__text a' ).click( function(e) {
      window.location = $( this ).attr( 'href' );
    });
  });

}( jQuery ));