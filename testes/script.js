const pesquisa = document.querySelector("#pesquisa")
const lista = document.querySelector("#lista")
const button = document.querySelector("#button")
var res = window.document.querySelector('.main-conteiner-res')





function click(event) {
    const interacao = event.type
    const pesquisa = document.querySelector("#pesquisa")
    var res = window.document.querySelector('.main-conteiner-res')
    const lista = document.querySelector("#lista")
    res.innerHTML = `Acionado com o mouse`
    if (interacao === "click") {
        lista.innerHTML += `<option>${(pesquisa).value}</option>`
    }
}


function enter(event) {
    const interacao = event.type
    const pesquisa = document.querySelector("#pesquisa")
    var res = window.document.querySelector('.main-conteiner-res')
    const lista = document.querySelector("#lista")
    res.innerHTML = `Acionado com o teclado`
    if (interacao === "keydown") {
        lista.innerHTML += `<option>${(pesquisa).value}</option>`
    }
}



// window.addEventListener("click", click)
window.addEventListener("keydown", enter)

// button.addEventListener("click", function bt(event){
//     var test = event.type
//     if(test === "click"){
//         console.log(button)
//     }
//     })
