const URL= 'https://randomfox.ca/floof/'
const img= document.getElementById("img")
const boton= document.getElementById("btn")

boton.addEventListener("click", ()=>{
    mostrarIMG()
})

const mostrarIMG =()=>{
    fetch (`${URL}`)
    .then((response) => response.json())
    .then((data) => {
        (img.src = data.image)
        })
}

  
mostrarIMG()  