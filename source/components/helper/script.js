( function($) {

  'use strict';
  
  $( function() {
  
    var $navTabs = $( '.b-helper-tabs span' );
    var $bodyTabs = $( '.b-helper-tab' );
    var $form = $( '.b-helper form' );
    var linkHref = $( '#helperLink' ).attr( 'href' );
    var ajaxUrl = $( '.b-helper-body' ).data( 'action' );
    var ajaxMethod = $( '.b-helper-body' ).data( 'method' );
  
    $( '.b-helper-tabs' ).delegate( 'span', 'click', function() {
      var $this = $( this );
      var tab = $this.data( 'tab' );
      var $tab = $( '.b-helper-tab[ data-tab=' + tab + ']' );
      
      $navTabs.removeClass( 'i-active' );
      $this.addClass( 'i-active' );
      $bodyTabs.removeClass( 'i-active' );
      $tab.addClass( 'i-active' );
      
      if ( $this.index() === ( $navTabs.length-1 )) {
        $form.addClass( 'i-submit' );
      } else {
        $form.removeClass( 'i-submit' );
      }
    });
    
    $( '.b-helper' ).delegate( 'input:checkbox, input:radio', 'click', function(e) {
    
      $.ajax({
        url: ajaxUrl,
        type: ajaxMethod,
        dataType: "json",
        data: $form.serialize(),
        success: function( data ) {
          $( '#helperCount' ).text( data.COUNT );
          $( '#helperCountUnit' ).text( unit( data.COUNT ));
          $( '#helperLink' ).attr({ href: linkHref + '?' + $form.serialize() });
          if (data.COUNT == 0) {
            $( '#helperLink' ).hide();
            $( '#helperLinkAlt' ).show();
          } else {
            $( '#helperLink' ).show();
            $( '#helperLinkAlt' ).hide();
          }
        },
        error: function() {}
      });
      
    });
    
    $form.find( '.b-button' ).click( function(e) {
      e.preventDefault();
      $( '.b-helper-tabs .i-active' ).next( 'span' ).click();
    });
    
    
    
    function unit( num ) {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return 'решений';}
      else if (/.*1$/.test(num)) {return 'решение';}
      else if (/[2-4]$/.test(num)) {return 'решения';}
      else {return 'решений';}
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));