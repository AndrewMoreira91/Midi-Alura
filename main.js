const listaTeclas = document.querySelectorAll('.tecla');
const listaKeys = ['t', 'y', 'u', 'g', 'h', 'j', 'b', 'n' ,'m']

function tocaSom (seletorAudio) {
    const audio = document.querySelector(seletorAudio)
    if (audio == null || audio.localName != 'audio') {
        console.log('Elemento não encotrado ou seletor inválido')
    } else {
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        }
    }
}

for (let i=0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const nameClass = tecla.classList[1];
    const idAudio = `#som_${nameClass}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === listaKeys[i]) {
            tecla.classList.add('ativa');
            tocaSom(idAudio)
        }
    })
    
    tecla.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    
    document.addEventListener('keyup', function(event) {
            tecla.classList.remove('ativa');
    })

}
