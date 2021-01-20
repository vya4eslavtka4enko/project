let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?");
const personalMovieDB = {
    count:'',
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
 personalMovieDB.count = numberOfFilms;  
for(let i = 0; i<=1;i++){
    let lastWatchFilms = prompt("Один из последних просмотреных фильмов ?");
    let appraisal = prompt('На сколько его оцените ?');
    personalMovieDB.movies[lastWatchFilms]=appraisal;
}
console.log(personalMovieDB);