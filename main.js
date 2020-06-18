//get all keys
const keys = document.querySelectorAll('.key');


//play notes
function playNote(event){
    
    //key codew
    let audioKeyCode = getKeyCode(event);

    //typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    //if key exists
    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey){
        return;
    }
    console.log(audioKeyCode);
    //play audio
    playAudio(audioKeyCode);

    //add effect
    addPlayingClass(key);

}

function addPlayingClass(key){
    key.classList.add('playing');
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

// function togglePlayingClass(key){
//     key.classList.toggle("playing");
// }

function playAudio(audioKeyCode){

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

    audio.currentTime = 0;    
    audio.play();
}

//get keycode
function getKeyCode(event){

    let keyCode;

    //what type of event
    const isKeyboard = event.type === "keydown" ;
    
    //keyboard or click
    if(isKeyboard) {
        keyCode = event.keyCode;
    }else{
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}


//click mouse
keys.forEach((key)=>{
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
});

//keyboard type
window.addEventListener("keydown", playNote);