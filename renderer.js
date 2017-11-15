const path = require('path');
const byKey = require('natural-sort-by-key');

new Vue({
  el: '#primary',

  data: {
    title:'',
    subtitle:'',

    filter: null,
    sorter: null,

    filters: [],
    sorters: [],

    opened:{},

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



    toggle:  function (e) {
      console.log(e.name)
      if(this.opened[e.name] === undefined) return Vue.set(this.opened, e.name, true);
      if(this.opened[e.name] === true) return Vue.set(this.opened, e.name, false);
      if(this.opened[e.name] === false) return Vue.set(this.opened, e.name, true);





    },




    sort:  function (e) {
      this.sorter = e.sorter;
    },

    unsort:  function (e) {
      this.sorter = list => list.sort(byKey('name'));
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


      let dir = path.resolve('./sample-database');

        require(path.join(dir,'sort.js')).forEach( i => this.sorters.push(i) );
        require(path.join(dir,'filter.js')).forEach( i => this.filters.push(i) );
        require(path.join(dir,'data.js')).forEach( i => this.db.push(i) );


    },
  }

})
