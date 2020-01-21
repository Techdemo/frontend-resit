"use strict"

const addLoader = () => {
  const markup =
    `<div id="spinner" class="spinner"></div>`
      document.getElementById("movieList").insertAdjacentHTML("afterbegin", markup)
}

const sanitizeLoader = () => {
  const movieList = document.getElementById("movieList");
  const child = document.getElementById("spinner")
  movieList.removeChild(child)
}

const fetchMovies = () => {
  let value = document.getElementById("value").value;
  if(value=== '') {
    console.log("value is leeg");
  } else {
    addLoader()
    let url = `http://www.omdbapi.com/?t=${value}&apikey=bf3d5b71`
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
    console.log("movies", movies)
  }
}

document.getElementById("clickMe").onclick = fetchMovies;