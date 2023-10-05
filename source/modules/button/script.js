$( '.b-button[href^="#popup"]' ).click( function(e) {
  e.preventDefault();
  
  var $this = $( this ),
  href = $this.attr( 'href' );
  
  $( href ).data( 'Popup' ).open();
});