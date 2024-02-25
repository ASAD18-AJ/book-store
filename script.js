var i = 0;

fetchData();
let more = document.querySelector("#showMore");
more.addEventListener("click", showMore);

function showMore() {
    i = i + 25;
    fetchData();
    console.log(i);
}




function fetchData() {
    fetch('https://api.publicapis.org/entries')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            let container = document.querySelector(".container");
            // console.log(movies.results[i].postser_path)

            let myLen = data.entries.length;
            console.log(myLen);
            showMovies();

            function showMovies() {
                for (var j = i; j < 25 + i + 1; j++) {
                    let movie = data.entries[j];
                    container.innerHTML +=
                        `<div class="box">
          <div class="moviesDetails">
            <div class="leftDetails">
            
              <h3>${movie.API}<h3>
            
              <h6>${movie.Description}</h6>
              <p>${movie.Category}</p>
            </div>
          </div>
        </div>`;
                }
            }
        })
        .catch((error) => console.log(error))
}
