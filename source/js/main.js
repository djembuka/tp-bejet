$( window ).scroll( function() {
  var top = $( document ).scrollTop() + parseInt( window.screen.height ) - 150;
  
  $( 'fieldset' ).each( function() {
    if ( $( this ).offset().top < top ) {
      $( this ).addClass( 'i-move' );
    }
  });
  
}).scroll();

$( 'form' ).form();

var $demoIframe = $( '#demo-iframe' );
var $window = $(window);
if ( $demoIframe.length ) {
  $window.resize( function() {
    $demoIframe.height( $window.height() - $demoIframe.offset().top );
  }).resize();
}

var container = document.getElementById( 'b-slider' );
if ( window.Ps && container ) {
  Ps.initialize(container);
}

//B24 chat + yandex Metrika
window.addEventListener( 'onBitrixLiveChat', function(event) {
	var widget = event.detail.widget;

	// Обработка событий 
	widget.subscribe({
		type: BX.LiveChatWidget.SubscriptionType.userMessage,
		callback: function(data) {
      
      if (typeof(dataLayer) == 'undefined') {
        dataLayer = [];
      }
      dataLayer.push({
        "ecommerce": {
          "purchase": {
            "actionField": {
              "id" : "chatsend1",
              "goal_id" : "46611745"
            },
            "products": [ {} ]
          }
        }
      });
		}
	});
});