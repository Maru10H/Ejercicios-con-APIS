const btn= document.getElementById("btn")
const imagen = document.getElementById("img")
const respuesta = document.getElementById("res")

btn.addEventListener("click", ()=>{
    mostrar()
})

const mostrar=()=>{
fetch ('https://yesno.wtf/api')
.then(response => response.json())
.then(data =>{
    imagen.src = data.image
    respuesta.innerHTML = data.answer
})
}

mostrar()
//JSON.stringify(data)