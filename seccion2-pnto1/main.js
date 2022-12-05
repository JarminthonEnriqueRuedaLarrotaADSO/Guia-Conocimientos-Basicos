addEventListener("DOMContentLoaded", (e)=>{
let llamar = document.querySelector('#form')

llamar.addEventListener("submit", (e)=>{
e.preventDefault()
let datos = Object.fromEntries(new FormData(e.target))
let input = datos.kilometros
let input1 = datos.minutos
let operacion1 = input1*60
let operacion = 60/input
let decimal = operacion.toFixed(7)
respues.innerHTML = `su resultado es ${decimal} m/km`
respuesta.innerHTML = `su resultado es ${operacion1} km/h`

})
})