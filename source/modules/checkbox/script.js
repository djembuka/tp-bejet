$( '.b-checkbox' ).click( function(e) {
  if ( $(e.target).is( 'a' )) {
    return;
  }
  $( this )
    .toggleClass( 'i-unchecked' )
    .removeClass( 'i-warning' );
});

$( '.b-checkbox :checkbox' ).click( function(e) {
  e.stopPropagation();
});