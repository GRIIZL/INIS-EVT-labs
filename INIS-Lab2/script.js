let personalMovieDB = {
	movies:	[
		{lastWatched:"Реквием по мечте",filmScore:8},
		{lastWatched:"Бэтмэн 2022",filmScore:7},
		{lastWatched:"Одаренная",filmScore:9},
		{lastWatched:"Адвокат дьявола",filmScore:8},
		{lastWatched:"ааааа",filmScore:100},
		{lastWatched:"БОБА",filmScore:0}
],
	private: false,
};

function movieTable(){
	if(personalMovieDB.private == true) return;
	let count=0
	let table = document.querySelector('.table');
	table.innerHTML += "<tr><td>Фильмы</td><td>Оценка</td></tr>"
	for(const movie in personalMovieDB.movies){
		let col = document.createElement('tr');
		col.innerHTML += "<td>" + personalMovieDB.movies[count].lastWatched + "</td>";
		col.innerHTML += "<td>" + personalMovieDB.movies[count].filmScore + "</td>";
		table.append(col);
		count++
	} 
	personalMovieDB.private=true;
}