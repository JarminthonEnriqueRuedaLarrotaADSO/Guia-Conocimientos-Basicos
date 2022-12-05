addEventListener("DOMContentLoaded", (e)=>{
let llamar = document.querySelector('#form')

llamar.addEventListener("submit", (e)=>{
e.preventDefault()
let datos = Object.fromEntries(new FormData(e.target))
let input = datos.grados_centigrados
let operacion = (9/5*input) + 32

respuesta.innerHTML = ` ${operacion} Grados Farenheit`

})
})