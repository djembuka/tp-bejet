$( '.b-solution-options' ).each( function() {
  new SolutionOptions( this );
});

$.widget( "custom.selectmenuPrice", $.ui.selectmenu, {
  _renderItem: function( ul, item ) {
    var li = $( "<li>" );
   
    if ( item.disabled ) {
      li.addClass( "ui-state-disabled" );
    }
   
    this._setText( li, item.label );
    li.attr( 'data-price', $( item.element ).data( 'price' ));
    li.attr( 'data-old-price', $( item.element ).data( 'old-price' ));
    
    return li.appendTo( ul );
  }
});

$( '.b-so__select' ).each( function() {
  var $this = $( this );
  $this.selectmenuPrice({
    width: 400,
    appendTo: $this.closest( '.b-so__select-container' ),
    select: function( event, ui ) {
      var value = ui.item.element.data( 'price' );
      $this.closest( '.b-so__i' ).find( '.b-so__price:not(.i-old) .b-so__price-num' ).text( value );
      
      var oldPrice = ui.item.element.data( 'old-price' ) || '';
      if ( oldPrice ) {
        $this.closest( '.b-so__i' ).find( '.b-so__price.i-old ').removeClass( 'i-hide' ).find( '.b-so__price-num' ).text( oldPrice );
      } else {
        $this.closest( '.b-so__i' ).find( '.b-so__price.i-old ').addClass( 'i-hide' )
      }
      $this.closest( '.b-solution-options' ).data( 'SolutionOptions' ).calculate();
    }
  });
});

function SolutionOptions( el ) {
  var self = this;
  
  this.el = el;
  this.$el = $( el );
  this.$el.data( 'SolutionOptions', this );
  
  this.$el.find( '.b-so__i' ).click( function(e) {
    var $this = $( this );
    
    //instead of stopPropagation()
    if ( $( e.target ).closest( '.b-so__select-container' ).length ) {
      return;
    }
    
    //check selectivity
    if ( self.$el.hasClass( 'i-unselective' )) {
      return;
    }
    
    //check disabled
    if ( $this.data( 'disabled' )) {
      self.showDisabledNote( $this, e );
      return;
    }
    
    //set style
    $this.toggleClass( 'i-unchecked' );
    
    //calculate summ
    var summ = self.calculate();
    
    //set checkbox to checked
    var checkbox = $this.find( ':checkbox' ).get(0);
    if ( checkbox.checked ) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
    
    //set select to disabled/enabled
    var select = $this.find( 'select' ).get(0);
    if ( select ) {
      select.disabled = !select.disabled;
    }
    
    //set ui-selectmenu-button to disabled/enabled
    if ( $this.hasClass( 'i-unchecked' )) {
      $this.closest( '.b-so__i' ).find( '.b-so__select' ).selectmenuPrice( 'disable' );
    } else {
      $this.closest( '.b-so__i' ).find( '.b-so__select' ).selectmenuPrice( 'enable' );
    }
    
    if ( +summ === 0 ) {
      self.$el.addClass( 'i-unchecked' );
    } else {
      self.$el.removeClass( 'i-unchecked' );
    }
    
    //trigger event
    self.$el.trigger( 'so:calculate', [ summ ]);
  });
  
  /*$( '#soSelectContainer' ).click( function(e) {
    //e.stopPropagation();
  });*/
  
  this.$el.find( 'select' ).change( function() {
    var value = $( this ).find( 'option:selected' ).data( 'price' );
    $( this ).closest( '.b-so__i' ).find( '.b-so__price:not(.i-old) .b-so__price-num' ).text( value );
    var oldPrice = $( this ).find( 'option:selected' ).data( 'old-price' ) || '';
    $( this ).closest( '.b-so__i' ).find( '.b-so__price.i-old .b-so__price-num' ).text( oldPrice );
    self.calculate();
  });
}

SolutionOptions.prototype.showDisabledNote = function( $item, e ) {
  var self = this,
      $note = $( '<div class="b-so__note">' + $item.data( 'disabled' ) + '</div>' ),
      top = $item.offset().top,
      left = $item.offset().left;
  
  $item.find( '.b-so__note' ).remove();
  
  $note.css({
      top: e.pageY - top - 25 + 'px',
      left: ( $(document).width() - 230 )/2 + 'px'
    });
      
  $item.append( $note );
};

SolutionOptions.prototype.calculate = function() {
  var summ = 0;
  this.$el.find( '.b-so__i:not( .i-unchecked ) .b-so__price:not(.i-old) .b-so__price-num' ).each( function() {
    summ += Number( $( this ).text().split( ' ' ).join( '' ));
  });
  
  summ = String( summ ).replace( /(\d{3})$/g, ' $1' );
  
  this.$el.find( '.b-so__summ-num' ).text( summ );
  
  return summ;
};