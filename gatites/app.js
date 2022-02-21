
const img1= document.getElementById("img1")
const img2= document.getElementById("img2")
const btn= document.getElementById("btn")

btn.addEventListener("click", ()=>{
    mostrarImagen()
})

const mostrarImagen=()=>{
    fetch ('https://api.thecatapi.com/v1/images/search')
    .then (response => response.json())
    .then ((data) => {
        img1.src = data[0].url
        
    })

    fetch ('https://api.thecatapi.com/v1/images/search')
    .then (response => response.json())
    .then ((data) => {
        img2.src = data[0].url
        
    })
}

mostrarImagen()