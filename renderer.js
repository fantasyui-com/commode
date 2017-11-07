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
          { name: 'Radio',      filter: i => i.tags.indexOf('Radio')!= -1 },
          { name: 'Audiobooks', filter: i => i.tags.indexOf('Audiobook')!=-1 },
          { name: 'Music',      filter: i => i.tags.indexOf('Music')!= -1 },
          { name: 'Movies',     filter: i => i.tags.indexOf('Movies')!=-1 },
        ].forEach( i => this.filters.push(i) );

        [
          { name: 'Podcast with Ads', tags: ['Radio']},
          { name: 'Man\'s Search for Meaning', tags: ['Audiobook']},
          { name: 'Wanted', tags: ['Movies']},


          { name: 'Wolfsheim - Once In A Lifetime', tags: ['Music']},
          { name: 'Depeche Mode - Enjoy The Silence', tags: ['Music']},
          { name: 'Apoptygma Berzerk - Kathy\'s Song', tags: ['Music']},
          { name: 'And One - Wasted', tags: ['Music']},
          { name: 'Blaq Audio - Stiff Kitttens', tags: ['Music']},
          { name: 'Stromkern - Stand Up', tags: ['Music']},
          { name: 'Rotersand - I Don\'t Know', tags: ['Music']},
          { name: 'Ladytron - Destroy Everything You Touch', tags: ['Music']},
          { name: 'Bjork - Army of Me', tags: ['Music']},
          { name: 'Nine Inch Nails - Closer', tags: ['Music']},




        ].forEach( i => this.db.push(i) );


    },
  }

})
