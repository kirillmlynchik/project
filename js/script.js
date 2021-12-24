"use strict";



const personalMovieDB= { 
  count: 0,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
  start: function() {
    personalMovieDB.count = +prompt('                                                                                                                                                                                                  ?','');
  
  
    }
  },
  remembermMyFilms:function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его', '');
         
  
        if(a != null && b != null && a !='' && b !='' && a.length < 50 ){
          personalMovieDB.movies[a] = b;
          console.log('done');
        } else {
          console.log('error');
          i--;
        }
  
  
  }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count>9 && personalMovieDB.count< 30){
      console.log('Вы классический зритель');
    }else if (personalMovieDB.count>29){
      console.log('Вы киноман');
    }else {
      (console.log('Произошла ошибка'));
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
    console.log(personalMovieDB);
    }
 },

function writeYourGenres() {
  for ( let i = 1; i <= 3; i++ ) {
     const genre = prompt(`Ваш любимый жанр под номером ${i}`);
     personalMovieDB.genres [i - 1] = genre;
  }
}
};