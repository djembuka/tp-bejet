$( '.b-slide-button' ).click( function(e) {
  $( '#b-slider' ).toggleClass( 'i-open' );
  e.stopPropagation();
  e.preventDefault();
});