( function($) {

  'use strict';
  
  $( function() {
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
    
    //Load more news when load button clicked
    $( '.b-news-feed .b-load-button' ).click( clickLoadMore );
    
    //Show images only when they are loaded
    showImages();
    
    $(".b-list img").lazyload();
    
  });
  
  var currentPage = 2;
  
  function showImages() {
    $( '.b-news-feed__i:not( .i-loaded )' ).each( function() {
      var $item = $( this ),
      $img = $( this ).find( 'img' ),
      img = $img[0];
      
      //If image is cached just show it
      if ( img.complete ) {
        $item.addClass( 'i-loaded' );
      } else {
        //If image is loading show it when loaded
        $img.load(function() {
          $item.addClass( 'i-loaded' );
        });
      }
    });
  }
  
  function clickLoadMore(e) {
    var $this = $( this ), pages;
    e.preventDefault();
    
    //Don't do anything if it's already loading
    if ( $this.hasClass( 'i-loading' )) {
      return;
    }
    
    //Init page variable
    pages = $this.parent().data( 'pages' );
    
    //Hide button, show preloader
    $this.addClass( 'i-loading' );
    
    //Send ajax request to load more news
    $.ajax({
      url: $this.attr( 'href' ),
      type: 'GET',
      dataType: 'html',
      data: {
        page: currentPage
      },
      success: function( data ) {
        //Increment page
        currentPage++;
      
        if ( currentPage > pages ) {
          //Hide button if it's the last page to show
          $this.hide();
        } else {
          //Show button again, hide preloader
          $this.removeClass( 'i-loading' );
        }
        
        //Return html code
        $this
          .closest( '.b-news-feed' )
          .children( '.b-news-feed__container' )
          //Append it to the news container
          .append( data );
          
          //Show new images when they are loaded
          setTimeout( showImages, 10 );
      },
      error: function() {}
    });
  }

}( jQuery ));