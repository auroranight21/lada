const sounds = ['clickOne', 'clickTwo', 'clickThree', 'clickFour', 'clickFive'];
sounds.forEach( sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    document.querySelector('#buttons').
    append(btn);
})