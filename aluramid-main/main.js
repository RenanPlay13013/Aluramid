function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll (".tecla");


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
      tocaSom(idAudio);
    }   
    tecla.onkeydown = function(evento){
      if(evento.code != 'Tab'){
      tecla.classList.add('ativa');
    }
    tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
    }

       
}