addEventListener("DOMContentLoaded", (e)=>{
let llamar = document.querySelector('#form')

llamar.addEventListener("submit", (e)=>{
e.preventDefault()
let datos = Object.fromEntries(new FormData(e.target))
let input = datos.año
if (input % 4 == 0 ) {
    respues.innerHTML = `su año es bisciesto`
}
else(respues.innerHTML =`su año no es bisciesto`)
})
})