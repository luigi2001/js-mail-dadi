
/* primo step: generazione numeri random per pc e utente da 1 a 6*/

var numeroRandomUtente = Math.floor(Math.random() * 6) + 1;
/* console.log (numeroRandomUtente); */
document.getElementById ('utente').innerHTML = 'numero utente:'+ numeroRandomUtente;

var numeroRandomPc = Math.floor(Math.random() * 6) + 1;
/* console.log (numeroRandomPc); */
document.getElementById ('pc').innerHTML = 'numero pc:' + numeroRandomPc;

/* secondo step: output vincitore */

var risultato = 'Peccato, hai Perso';

if (numeroRandomUtente > numeroRandomPc){
    risultato = 'Complimenti, Hai vinto !';
} else if(numeroRandomUtente == numeroRandomPc){
    risultato = 'Parità! Riprova';
}

document.getElementById ('esito').innerHTML = risultato;
