
const list = document.querySelector(".list")
const btnOpenmodal = document.querySelector(".button-addopen-modal")
const idinputADD = document.querySelector(".idinput")
const titleinputADD = document.querySelector(".titleinput")
const genreinputADD = document.querySelector(".genreinput")
const directorinputADD = document.querySelector(".directorinput")
const yearinputADD = document.querySelector(".yearinput")
const btnADD = document.querySelector(".btnADD")
const mobalADD = document.querySelector(".mobalADD")
const mobalEditOpen = document.querySelector(".button-edit-modal")
const input = document.querySelector(".input")



btnOpenmodal.addEventListener("click", () => {
    mobalADD.classList.remove("true")
})


btnADD.addEventListener("click", () => {
    mobalADD.classList.add("true")
    const newMovie = {
        id: idinputADD.value,
        title: titleinputADD.value,
        genre: genreinputADD.value,
        director: directorinputADD.value,
        year: yearinputADD.value,
    };




function addMovie(newMovie) {

        const response =  fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        });

}
addMovie(newMovie)
})
function findLock() {
    let myURL = `http://localhost:3000/movies`;
    console.log(myURL);
    fetch(myURL)
      .then((data) => data.json())
      .then((data) => {
  
        const listMarkUp = data.map((data) => {
       
          
            console.log(data);

            const listElem = `
        <li class="bb">
        <h2>id: ${data.id}</h2>
        <h2>title: ${data.title}</h2>
        <h2>genre: ${data.genre}</h2>
        <h2>director: ${data.director}</h2>
        <h2> year: ${data.year}</h2>
  </li>
      `;
            return listElem;
         
      });
      list.innerHTML = listMarkUp;
      })
      .catch((error) => console.error(error));
  }

  findLock()









const titleinputed = document.querySelector(".titleinputed")
const genreinputed = document.querySelector(".genreinputed")
const directorinputed = document.querySelector(".directorinputed")
const yearinputed = document.querySelector(".yearinputed")
const btned = document.querySelector(".btned")
const modaledit = document.querySelector(".mobaladit")
  mobalEditOpen.addEventListener("click", () => {
    modaledit.classList.remove("true")
})


btned.addEventListener("click", () => {
    modaledit.classList.add("true")
    const movieIdToUpdate = input.value;
    const updatedMovieData = {
            title: titleinputed.value,
            genre: genreinputed.value,
            director: directorinputed.value,
            year: yearinputed.value,
    };
    function updateMovie(movieId, updatedData) {

        const response =  fetch(`http://localhost:3000/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

}
updateMovie(movieIdToUpdate, updatedMovieData);
  })


  
  const btndel = document.querySelector(".button-delete")
  const inputIDDel = document.querySelector(".inputdel")





btndel.addEventListener("click",() => {
    const movieIdToDelete = inputIDDel.value;
    function deleteMovie(movieId) {
        {
           const response =  fetch(`http://localhost:3000/movies/${movieId}`, {
               method: 'DELETE',
           });
   
   
   }
   }
   deleteMovie(movieIdToDelete)
})
