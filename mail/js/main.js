// Chiedi all’utente la sua email
const emailUtente = prompt("Inserisci il tuo indirizzo email")
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull’esito del controllo
const listaEmail = ["manuel@manuel.it", "ok@ok.it", "altieri@altieri.it", "boolean@ok.it", "email@email.it"]
let permesso = "Accesso rifiutato";
for(let i = 0; i < listaEmail.length; i++) {
    if (emailUtente == listaEmail[i]) {
        permesso = "Accesso approvato"
    }
}

alert (permesso)