var i = 0;

fetchData();
let more = document.querySelector("#showMore");
more.addEventListener("click", showBooks);

function showMore() {
    i = i + 25;
    fetchData();
    i++;
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
            showBooks();

            function showBooks() {
                for (var j = i; j < 25 + i + 1; j++) {
                    let book = data.entries[j];
                    container.innerHTML +=
                        `<div class="box">
          <div class="moviesDetails">
            <div class="leftDetails">
            
              <h3>${book.API}<h3>
            
              <h6>${book.Description}</h6>
              <p>${book.Category}</p>
            </div>
          </div>
        </div>`;
                }
            }
        })
        .catch((error) => console.log(error))
}
