var app= new Vue({
  el: '#root',
  data:{
    disks: [],
    genres: ['All'],
    selectedGenre: 'All',
    refYear: 0,
  },
  methods: {
    sortYear: function(){
      this.disks.sort(function(a, b) {
        return a.year - b.year;
      });
    },
  },
  created: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
          var disksObjArray = response.data.response;
          //console.log(disksObjArray);
          this.disks = [...disksObjArray];
          for (var i = 0; i < disksObjArray.length; i++) {
            if (!this.genres.includes(disksObjArray[i].genre)) {
              this.genres.push(disksObjArray[i].genre)
            }
          }

        });
  }
});
