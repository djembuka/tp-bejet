( function($) {

  'use strict';
  
  $( function() {
  
    var $form = $( '.b-subscription form' );
    
    $( '.b-subscription' ).delegate( '.b-subscription__send-again', 'click', function(e) {
      var $subscription = $( this ).closest( '.b-subscription' );
      $subscription.addClass( 'i-fadeout' );
      setTimeout( function() {
        $subscription
          .removeClass( 'i-error' )
          .removeClass( 'i-success' )
          .removeClass( 'i-fadeout' );
      }, 500);
      $form.find( 'input' ).val('');
      e.preventDefault();
    });
    
    if ( $form.data( 'Form' ) === undefined ) {
      $form.form();
    }
    
    $form.data( 'Form' ).submitForm = function(e) {
      var $form = $( e.target );
      var self = $form.data( 'Form' );
      var $subscription = $form.closest( '.b-subscription' );
      if ( self.$submitButton.hasClass( 'i-disabled' ) || !self.isValid() ) {
        e.preventDefault();
      } else {
  
        $.ajax({
          url: self.$elem.attr("action"),
          type: self.$elem.attr("method"),
          dataType: "json",
          data: self.$elem.serialize(),
          success: function(data) {
          
            if( data && data.STATUS && data.STATUS === "Y" ) {
            
              self.$elem.closest( '.b-subscription' ).addClass( 'i-fadeout' );
              setTimeout( function() {
                self.$elem.closest( '.b-subscription' )
                  .addClass( 'i-success' )
                  .removeClass( 'i-error' )
                  .removeClass( 'i-fadeout' );
              }, 500);
              $subscription.find( '.b-message' ).html( data.MESSAGE );
              Cookies.set( 'NEWS_SUBSCRIBED', 'Y', { expires: 1, path: window.location.hostname });
              
            } else if ( data && data.STATUS && data.STATUS === "E" ) {
            
              self.$elem.closest( '.b-subscription' ).addClass( 'i-fadeout' );
              setTimeout( function() {
                self.$elem.closest( '.b-subscription' )
                  .addClass( 'i-error' )
                  .removeClass( 'i-success' )
                  .removeClass( 'i-fadeout' );
              }, 500);
              $subscription.find( '.b-message' ).html( data.MESSAGE );
              
            }
          },
          error: function() {}
        });
        
        e.preventDefault();
      }
    };
    
    $form.submit( $form.data( 'Form' ).submitForm );
  
    $( '.i-float .b-input-text' )
      .focus( function() {
        $( this ).parent( '.i-float' ).addClass( 'i-focus' );
      })
      .blur( function() {
        var $this = $( this );
        if ( $this.val() === '' ) {
          $this.parent( '.i-float' ).removeClass( 'i-focus' );
        }
      })
      .each( function() {
        if ( $( this ).val() !== '' ) {
          $( this ).parent( '.i-float' ).addClass( 'i-focus' );
        }
      });

    $( '.i-float .b-label' ).click( function() {
      var $float = $( this ).parent( '.i-float' );
      
      if ( !$float.hasClass( 'i-focus' )) {
        $float.find( '.b-input-text' ).focus();
      }
    });
    
    if ( Cookies.get( 'NEWS_SUBSCRIBED' )) {
      $( '.b-subscription' ).hide();
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));