// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

new Vue({
  el: '#primary',

  data: {
    title:'',
    subtitle:'',
    filter: i=> i.power >= 8000,
    filters: [],
    db: [],
  },

  created: function () {
    this.deselect();
    this.update();
  },

  computed: {

    computedFilters: function () {
      return this.filters;
    },

    computedDatabase: function () {
      return this.db.filter( this.filter );
    },

  },

  methods: {

    select:  function (e) {
      this.filter = e.filter;
      this.title = e.name;

    },

    deselect:  function (e) {
      this.title = 'All Items';
      this.filter = i => true;

    },

    update:  function (e) {


        [
          { name: 'Radio',      filter: i => i.kind.indexOf('Radio')!= -1 },
          { name: 'Audiobooks', filter: i => i.kind.indexOf('Audiobook')!=-1 },
          { name: 'Music',      filter: i => i.kind.indexOf('Music')!= -1 },
          { name: 'Movies',     filter: i => i.kind.indexOf('Movies')!=-1 },
        ].forEach( i => this.filters.push(i) );

        [
          { name: 'Podcast with Ads', kind: ['Radio']},
          { name: 'Man\'s Search for Meaning', kind: ['Audiobook']},
          { name: 'Wanted', kind: ['Movies']},


          { name: 'Wolfsheim - Once In A Lifetime', kind: ['Music']},
          { name: 'Depeche Mode - Enjoy The Silence', kind: ['Music']},
          { name: 'Apoptygma Berzerk - Kathy\'s Song', kind: ['Music']},
          { name: 'And One - Wasted', kind: ['Music']},
          { name: 'Blaq Audio - Stiff Kitttens', kind: ['Music']},
          { name: 'Stromkern - Stand Up', kind: ['Music']},
          { name: 'Rotersand - I Don\'t Know', kind: ['Music']},
          { name: 'Ladytron - Destroy Everything You Touch', kind: ['Music']},
          { name: 'Bjork - Army of Me', kind: ['Music']},
          { name: 'Nine Inch Nails - Closer', kind: ['Music']},




        ].forEach( i => this.db.push(i) );


    },
  }

})
