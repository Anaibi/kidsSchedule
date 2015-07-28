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
      'deberes': {color: 'bisque'},
      'jugar': {color: 'greenyellow'},
      'maquinas': {color: 'lightseagreen'},
      'salir': {color: 'darkgreen'},
      'trabajar': {color: 'aquamarine'}
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
    if (background) { 
      ractive.set('paintBg', background);
    } else {
      ractive.set('paintColor', color);
    }
  },
  'paint': function(event) { 
    var bg = ractive.get('paintBg');
    if (bg) {
      $(event.original.target).addClass(bg);
    } else {
      $(event.original.target).css('background-color', ractive.get('paintColor'));
    }
  }
});