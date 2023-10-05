$( '.b-po__i' ).click( function(e) {
  var $this = $( this );
  
  if ( $this.hasClass( 'i-active' )) {
    return;
  }
  
  $this
    .addClass( 'i-active' )
    .siblings().removeClass( 'i-active' );
});