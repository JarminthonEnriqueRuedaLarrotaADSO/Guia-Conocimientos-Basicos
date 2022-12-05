addEventListener("DOMContentLoaded", (e)=>{
let llamar = document.querySelector('#formulario')

llamar.addEventListener("submit", (e)=>{
e.preventDefault()
let datos = Object.fromEntries(new FormData(e.target))
let input = datos.edad
let input1 = datos.edad1
let operacion = input1-input
respuesta.innerHTML = `Su edad actual es :: ${operacion}`

})

})