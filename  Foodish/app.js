const biryani = document.getElementById("btn-biryani")
const burguer =document.getElementById("btn-burger")
const dosa= document.getElementById("btn-dosa")
const idly= document.getElementById("btn-idly")
const pizza= document.getElementById("btn-pizza")
const all= document.getElementById("btn-all")
const img= document.getElementById("img")

biryani.addEventListener("click",()=>{
    mostrarIMG("biryani")
})

burguer.addEventListener("click",()=>{
    mostrarIMG("burger")
})

dosa.addEventListener("click",()=>{
    mostrarIMG("dosa")
})

idly.addEventListener("click",()=>{
    mostrarIMG("idly")
})

pizza.addEventListener("click",()=>{
    mostrarIMG("pizza")
})

all.addEventListener("click",()=>{
    mostrarIMG("somefoodish")
})

const mostrarIMG=(url="")=>{
    fetch(`https://foodish-api.herokuapp.com/api/images/${url}`)
    .then(response => response.json())
    .then( data =>{
        img.src= data.image
    })
}

mostrarIMG("pizza")