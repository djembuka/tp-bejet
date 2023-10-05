$( 'body' ).append( $( '.b-popup' ));

$( '.b-popup' ).each( function() {
  new Popup( this );
});

function Popup( el ) {
  var self = this;
  
  this.el = el;
  this.$el = $( el );
  this.$el.data( 'Popup', this );
  
  $( 'html' ).addClass( 'i-popup-ready' );
  $( document ).bind( 'popup:keyup', function (e) {
		if ( e.keyCode === 27 ) {
			self.close();
		}
	});
  
  $( document ).on( 'keyup', function() {
    $( document ).trigger( 'popup:keyup' );
  });
  
  this.$el.find( '.b-solution-options' ).on( 'so:calculate', function( event, summ ) {
    if ( +summ === 0 ) {
      self.$el.find( '.b-popup__button .b-button' ).addClass( 'i-disabled' );
    } else {
      self.$el.find( '.b-popup__button .b-button' ).removeClass( 'i-disabled' );
    }
  });
  
  this.$el.find( '.b-popup__close' ).click( function(e) {
    e.preventDefault();
    self.close();
  });
}

Popup.prototype.open = function() {
  var self = this;
  this.$el.addClass( 'i-no-transition' );

  setTimeout( function() {
    self.$el.removeClass( 'i-no-transition' );
    $( 'html' ).addClass( 'i-popup-active' );
  }, 0 );
  
  this.align();
  
  this.$cover = $( '<div class="b-popup-cover"></div>' );  
  this.$el.before( this.$cover );
  
  this.$cover.click( function(e) {
    e.preventDefault();
    self.close();
  });
};

Popup.prototype.close = function() {
  this.$cover.remove();
  $( 'html' ).removeClass( 'i-popup-active' );
};

Popup.prototype.align = function() {
  var top = 0,
      winHeight = $( window ).height(),
      outerHeight = this.$el.outerHeight(),
      scrollTop = (window.pageYOffset || document.documentElement.scrollTop) / 0.9;//0.9 - ratio of transformation for body tag
      
  if ( winHeight > this.$el.outerHeight() ) {
    top = winHeight/2 + scrollTop - outerHeight/2 - 20 + 'px';
  } else {
    top = scrollTop + 20 + 'px';
  }
  
  this.$el.css({
    left: '50%',
    marginLeft: -this.$el.outerWidth() / 2 + 'px',
    top: top
  });
  
};