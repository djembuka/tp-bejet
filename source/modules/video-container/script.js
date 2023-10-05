$( '.b-video-container__menu' ).delegate( '.b-video-container__menu-item', 'click', function(e) {
  e.preventDefault();
  var $menuItem = $( this );
  var $container = $menuItem.closest( '.b-video-container' );
  var $tab = $menuItem.closest( '.b-video-container' ).find( '.b-video-container__tab[data-tab=' + $menuItem.data( 'tab' ) + ']' );
  var $activeTab = $container.find( '.b-video-container__tab.i-active' );
    
  $tab.hide().removeClass( 'hidden' );
  
  $container.height( $container.height()).height( $tab.height() + 96 );
  
  $container.find( '.b-video-container__menu-item' ).removeClass( 'i-active' );
  $menuItem.addClass( 'i-active' );
  
  $menuItem
    .closest( '.b-video-container' )
    .find( '.b-video-container__tab' )
    .not( '[data-tab=' + $menuItem.data( 'tab' ) + ']' )
    .removeClass( 'i-active' )
    .removeClass( 'show-tab' )
    .addClass( 'hide-tab' );
  
  $activeTab
    .removeClass( 'i-active' )
    .removeClass( 'show-tab' )
    .addClass( 'hide-tab' );
  
  setTimeout( function() {
    $activeTab.hide();
    $tab.show().removeClass( 'hide-tab' ).addClass( 'show-tab' ).addClass( 'i-active' );
  }, 500 );
});