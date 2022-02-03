//pegar todas as teclas do teclado
const keys = document.querySelectorAll(".key")

//tocar notas
function playNote(event) {

    let audioKeyCode = getKeyCode(event)


    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`) //adicionando audio
    console.log(key)

    const cantFoundAnyKey = !key

    if(cantFoundAnyKey){
        return
    }

    playAudio(audioKeyCode)
    addPlayingClass(key)
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function getKeyCode(event) {

    let keyCode // keyCode = codigo correspodente a tecla

    const isKeyboard = event.type === "keydown"
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key //target = caminho 
    }

    return keyCode
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

//interagindo com o click 
keys.forEach(function (key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

// interagindo com as teclas
window.addEventListener("keydown", playNote)
