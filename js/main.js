var ractive = new Ractive({
  el: '#ractive-container',
  template: '#template',
  data: {
    hour: [],
    paintColor: 'white',
    paintBg: '',
    paintItem: false,
    items: {
      'dormir': {color: 'darkblue', background: 'nightsky'},
      'comer': {color: 'sandybrown', background: 'comer'},
      'deberes': {color: 'khaki'},
      'jugar': {color: 'greenyellow'},
      'maquinas': {color: 'darkred'},
      'salir': {color: 'darkgreen'},
      'trabajar': {color: 'aquamarine'},
      'duchar': {color: 'tomato'},
      'dientes': {color: 'red'},
    }
  }
});

var hour = ractive.get('hour');
for (var i=0; i<24;i++) {
  hour[i] = i + ':00';
}

ractive.set('hour', hour);

ractive.on({
  'saveColor': function(event, color, background) { 
    if (background) { console.log('has bg');
      ractive.set('paintBg', background);
      ractive.set('paintItem', true);
    } else { console.log('has color');  
      ractive.set('paintColor', color);
    }
  },
  'paint': function(event) { 
    var bg = ractive.get('paintBg');
    if (bg && ractive.get('paintItem')) {
      $(event.original.target).addClass(bg);
      ractive.toggle('paintItem');
    } else {
      $(event.original.target).css('background-color', ractive.get('paintColor'));
    }
  }
});