( function($) {

  'use strict';
  $( function() {
     $( '.b-catalog-basket .b-solution-options' ).on( 'so:calculate', function( event, summ ) {
      var $this = $( event.target ),
          $basket = $this.closest( '.b-catalog-basket' ),
          $button = $basket.find( '.b-form-submit .b-button' );
          
      if ( +summ === 0 ) {
        $button.addClass( 'i-disabled' );
      } else {
        $button.removeClass( 'i-disabled' );
      }
    });
  });

}( jQuery ));