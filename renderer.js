// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//          $('#exampleModal').modal({})





// function(a, b) {
//
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//
//   // names must be equal
//   return 0;
// }
//




new Vue({
  el: '#primary',

  data: {
    title:'',
    subtitle:'',

    filter: null,
    sorter: null,

    filters: [],
    sorters: [],

    db: [],
  },

  created: function () {
    this.unsort();
    this.deselect();
    this.update();
  },

  computed: {

    computedFilters: function () {
      return this.filters;
    },

    computedDatabase: function () {
      return this.sorter( this.db.filter( this.filter ) );
    },

  },

  methods: {

    filtersModal:  function (e) {
      $('#filtersModal').modal({})
    },

    sort:  function (e) {
      this.sorter = e.sorter;
    },

    unsort:  function (e) {
      this.sorter = list => list.sort();
    },

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

          { name: 'Alpha-numeric', sorter: list => list.sort() },
          { name: 'Alpha',         sorter: list => list.sort() },

        ].forEach( i => this.sorters.push(i) );

        [

          { name: 'Radio',      filter: i => i.tags.indexOf('Radio')!= -1 },
          { name: 'Audiobooks', filter: i => i.tags.indexOf('Audiobook')!=-1 },
          { name: 'Music',      filter: i => i.tags.indexOf('Music')!= -1 },
          { name: 'Movies',     filter: i => i.tags.indexOf('Movies')!=-1 },
          { name: 'Radio & Audiobooks', filter: i => (['Radio','Audiobook'].map(j=>i.tags.indexOf(j)).filter(j=>j>-1).length>0) },

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
