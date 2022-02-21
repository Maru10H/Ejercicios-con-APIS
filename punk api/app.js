const boton = document.getElementById("btn-random")
const card = document.getElementById("card")
const URL ='https://api.punkapi.com/v2/'

boton.addEventListener("click", ()=>{
    mostrarImagen()
})

const mostrarImagen=()=>{

    fetch(`${URL}beers/random`)
    .then(response => response.json())
    .then(data =>{
        card.innerHTML =
         `
        <h2 class="card__title">Punk IPA 2007 - 2010</h2>
        <img
          id="img"
          src=${data[0].image_url}
          alt="beer"
          height="180"
        />
        <p class="card__description">
          ${data[0].description}
        </p>
    `
    })

}