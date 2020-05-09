
import keySounds from './sound-creator';




(function main()
{
    const keyboard = document.querySelector('.set');
    keyboard.addEventListener('click', playNote);
})();


function playNote(event)
{
    if (event.target.id === '') return;
    else renderSound(event.target.id);
}


function renderSound(note)
{
    keySounds[note].play();
}



