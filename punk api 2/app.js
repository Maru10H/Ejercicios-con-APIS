const URL ='https://api.punkapi.com/v2/'
const card = document.getElementById("card")


const renderizar=()=>{

fetch(`${URL}beers/random`)
.then(response => response.json())
.then(data =>{
    let imprimir=""
    for(const datos of data){
        imprimir +=
        `
     <h2>Punk IPA 2007 - 2010</h2>
      <img
        src=${datos.image_url}
        alt="beer"
        height="180"
      />
      <p class="card__description">
        ${datos.description}
      </p>
     `
    }

    card.innerHTML = imprimir
     
})
}

renderizar()