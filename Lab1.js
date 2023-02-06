let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");
const personalMovieDB = 
{
    count: numberOfFilms, 
    movies: {}
};

for (var i=0; i<2; i++)
{
	let film = prompt("Один из последних просмотренных фильмов?")
	let rate = prompt("На сколько оцените его?")
	if (film!=null && film!="" && film.length < 50)
	{
	personalMovieDB.movies[film]=rate;
	}
	else
	{
                i--;
		alert("Что-то пошло не так");
	}
}
console.log(personalMovieDB)
