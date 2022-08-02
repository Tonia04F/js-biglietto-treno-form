prenota.addEventListener('submit', calcolaPrezzoBiglietto);

function calcolaPrezzoBiglietto(submit){
  submit.preventDefault();

const km = document.getElementById('km').value;
const etaPasseggero = document.getElementById('etaPasseggero').value;

const scontoRagazzi = 0.20;
const scontoAnziani = 0.40;

let prezzoBiglietto = km*0.21;

if(age<18){
    prezzoBiglietto -= (prezzoBiglietto*scontoRagazzi);
}else if(age>=65){
    prezzoBiglietto-=(prezzoBiglietto*scontoAnziani);
}else {
    return prezzoBiglietto;
}
 
  const ul = document.getElementById('biglietto');
 
  const li = document.createElement('li');
  li.innerHTML = 'Km da percorrere: ' + Km + ' - ' + 'Età passeggero: ' + etaPasseggero + ' - ' + 'Prezzo finale: ' + prezzoBiglietto + "€";
  // aggiungo li a ul
  ul.appendChild(li);

}
