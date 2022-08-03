
//intercetto bottone submit per effettuare la prenotazione dopo l aggiunta campi
const formPrenota = document.getElementById('formPrenota');
console.log(formPrenota);
//aggiungo listener per ricevere evento, nel mio caso submit, e poi aggiungo la funzione che creerò (function)
formPrenota.addEventListener('submit', riceviParametri);

//definisco la funzione (event) è l evento che devo analizzare nella funzione cioè il submit nel mio caso
function riceviParametri(event){
//serve nel caso in cui aggancio eventi che hanno comportamenti di default
    event.preventDefault();
    console.log(event);
//leggere il valore di km e di age 
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("etaPasseggero");
//stampe per provare il funzionamento
//console.log(kmInput);
//console.log(kmInput.value);
//console.log(etaInput.value);
//converto il valore inserito in numerico
const kmValue = parseInt(kmInput.value);
const etaValue= parseInt(etaInput.value);
//richiamo la funzione del calcolo della funzione che raccoglie i parametri e le aggiungo i parametri che deve utilizzare
const prezzoFinale = calcolaPrezzo(kmValue, etaValue);
console.log(prezzoFinale);


//inserisco valori nella tabella per stampare biglietto
DocumentTimeline.getElementById('kmOutput').innerHTML=kmValue;
DocumentTimeline.getElementById('offertaOutput').innerHTML=prezzoFinale.offerta;
DocumentTimeline.getElementById('prezzoOutput').innerHTML=prezzoFinale;

}

//creo funzione per calcolo prezzo e poi la rchiamo nella funzione principale cioe quella sopra
function calcolaPrezzo(km, etaPasseggero){
    let price = km*0.21;
    let offerta = "Standard";
//calcolo gli sconti
    if(etaPasseggero<18){
        price -=  price * 0.2;
        offerta = "Sconto minorenni";
    }
    if(etaPasseggero>=65){
        price -=  price * 0.4;
        offerta = "Sconto anziani";
    }
    //ritorno un oggetto che comprenda prezzo ed offerta per poter ritornare tutti e due 
    return {
        price: price,
        offerta: offerta,
    };
}