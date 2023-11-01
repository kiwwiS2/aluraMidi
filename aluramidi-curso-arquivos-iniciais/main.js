function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

wihile (contador < listaDeTeclas.length) {
const efeito = listaDeTeclas[contador].classList[1];
 const idAudio = "#som_"+efeito;
 listaDeTeclas[contador].onclik = function()
 {
     tocaSom(idAudio);
 }
    contador = contador + 1;
    consol.long(contador);
            


let contador = 0;
while (contador<9) {
    listaDeTeclas[ contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.long(contador);
}
