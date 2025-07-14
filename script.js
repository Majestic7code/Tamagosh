
//Barra de status
let fome = 100;
let felicidade = 100;
let energia = 100;

function atualizarStatus(){
    document.querySelector('#fome').textContent = fome;
    document.querySelector('#felicidade').textContent = felicidade;
    document.querySelector('#energia').textContent = energia;

    if (fome <= 0 || felicidade <= 0 || energia <= 0 ){
        alert('Seu Tamagosh foi de Arrasta :,(');
        fome = 100;
        felicidade = 100;
        energia = 100;
    }

    if (fome >=60){

    }
}

setInterval(() => {
    fome = Math.max(0, fome - 3);
    felicidade = Math.max(0, felicidade -2);
    energia = Math.max(0, energia - 1);

    atualizarStatus();
}, 2000);

//Funçoes
function darComida() {
    fome = Math.min(fome + 10, 100);
    atualizarStatus();
}

function seDivertir() {
    felicidade = Math.min(felicidade + 10, 100);
    atualizarStatus();
}

function irDormir(){
    energia = Math.min(energia + 10, 100);
    atualizarStatus();
}