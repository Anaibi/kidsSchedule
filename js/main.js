var ractive = new Ractive({
  el: '#ractive-container',
  template: '#template',
  data: {
    hour: [],
    paintColor: 'white',
    paintItem: false,
    items: {
      'dormir': {color: 'darkblue'},
      'comer': {color: 'sandybrown'},
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
  'saveColor': function(event, color) { 
    ractive.set('paintColor', color);
  },
  'paint': function(event) {
    var color = ractive.get('paintColor');
    $(event.original.target).css('background-color', color);
  }
});