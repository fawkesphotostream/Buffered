$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  // axios
  //   .get("http://www.omdbapi.com/?i=tt3896198&apikey=552b3f50&s=" + searchText)
  // axios
  //   .get("http://www.omdbapi.com/?s=${searchText}&i=tt3896198&apikey=552b3f50")

  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=01f9e99d6429ad0ea22d4daac1efe85f&query=" +
        searchText
    )

    .then((response) => {
      console.log(response);
      let movies = response.data.results;
      let output = "";
      $.each(movies, (index, movie) => {
        // let title = movie.title;
        // console.log(title);
        output += `
        <div class ="col-md-2">
          <div class ="well text-center">
          <img class ="poster" src="https://image.tmdb.org/t/p/w780/${movie.poster_path}">
          <p>${movie.title}</p>
          <a onclick="movieSelected('${movie.id}')" class = "btn btn-primary" id="detailbutton" href ="#">Movie Details</a>
          </div>
        </div>
        `;
      });

      $("#movies").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
