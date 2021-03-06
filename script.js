"use strict"

const addLoader = () => {
  const markup =
    `<div id="spinner" class="spinner"></div>`
      document.getElementById("movieListSection").insertAdjacentHTML("afterbegin", markup)
}

const sanitizeLoader = () => {
  const movieList = document.getElementById("movieListSection");
  const child = document.getElementById("spinner")
  movieList.removeChild(child)
}

const saveMovie = (title) => {
  console.log("title", title)
}

const fetchMovies = (event) => {
  event.preventDefault()
  let value = document.getElementById("value").value;
  if(value=== '') {
    console.log("value is leeg");
  } else {
    addLoader()
    let url = `https://www.omdbapi.com/?t=${value}&apikey=bf3d5b71`
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
        setTimeout(() => { 
          sanitizeLoader() 
          renderMovies(res)
        }, 3000);
      })
    }

  const renderMovies = movies => {
    movies.length === 0 ? noMovies() : populateMovie(movies)
  }

  const noMovies = () => {
      console.log("geen film")
  }

  const populateMovie = movies => {
    console.log("populating movies", movies);
    const markup =
    `<li>
      <article>
        <p>Titel: ${movies.Title}</p>
        <p>Year: ${movies.Year}</p>
        <p class="released">Year: ${movies.Released}</p>
        <footer>
          <button onClick="saveMovie(movies.Title)">Film Opslaan</button>
        </footer>
      </article>
    </li>`
    document.getElementById("movieList").insertAdjacentHTML("afterbegin", markup)
  }
}
