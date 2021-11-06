const PREZZO_FOTO = 1.00, PREZZO_CAPPELLO = 10.0, PREZZO_MAGLIETTA = 15.0, PREZZO_TAZZA = 5.00;
const FOTO = 0, CAPPELLO = 1, MAGLIETTA = 2, TAZZA = 3;
const ESTESA = 0, COMPATTA = 1;

var numeroArticoli = document.getElementById("n-elementi");
var prezzoTotale = document.getElementById("prezzo-totale");

var numeroFoto, numeroCappello, numeroMaglietta, numeroTazza;
var elementiNelCarrello = document.getElementById("acquisti");
var carrello = [0, 0, 0, 0];
var totale = 0;
var totaleArticoli = 0;

var bottoneAggiungiFoto, bottoneAggiungiCappello, bottoneAggiungiMaglietta, bottoneAggiungiTazza;
var bottoneAggiungiFotoNegozio, bottoneAggiungiCappelloNegozio, bottoneAggiungiMagliettaNegozio, bottoneAggiungiTazzaNegozio;
var bottoneRimuoviFoto, bottoneRimuoviCappello, bottoneRimuoviMaglietta, bottoneRimuoviTazza;

var nFoto, nCappello, nMaglietta, nTazza;

var bottoneVisualizzazioneEstesa, bottoneVisualizzazioneCompatta;
var bottoneOrdinaPerNome, bottoneOrdinaPerNumero, bottoneOrdinaPerRuolo, bottoneOrdinaPerAnno;

var elencoGiocatori;
var menu;
var visualizzazioneCorrente = ESTESA;

bottoneOrdinaPerNome = document.getElementById("bottone-ordinamento-nome");
bottoneOrdinaPerNumero = document.getElementById("bottone-ordinamento-numero-maglia");
bottoneOrdinaPerRuolo = document.getElementById("bottone-ordinamento-ruolo");
bottoneOrdinaPerAnno = document.getElementById("bottone-ordinamento-anno");

elencoGiocatori = document.getElementById("elenco-giocatori");

bottoneVisualizzazioneEstesa = document.getElementById("bottone-visualizzazione-estesa");
bottoneVisualizzazioneCompatta = document.getElementById("bottone-visualizzazione-compatta");

nFoto = document.getElementById("n-foto");
nCappello = document.getElementById("n-cappello");
nMaglietta = document.getElementById("n-maglietta");
nTazza = document.getElementById("n-tazza");

bottoneAggiungiFotoNegozio = document.getElementById("acquista-foto");
bottoneAggiungiCappelloNegozio = document.getElementById("acquista-cappello");
bottoneAggiungiMagliettaNegozio = document.getElementById("acquista-maglietta");
bottoneAggiungiTazzaNegozio = document.getElementById("acquista-tazza");

function aggiornaNumero() {
    numeroArticoli.textContent = totaleArticoli;
}

function aggiornaPrezzo() {
    prezzoTotale.textContent = totale;
}

function creaRiquadro(qualeElemento) {
    var riquadro = document.createElement("div");
    var nomeElemento = document.createElement("h6");
    var quantitaElemento = document.createElement("p");
    var bottoneAggiungi = document.createElement("button");
    var bottoneRimuovi = document.createElement("button");

    riquadro.classList.add("articolo");
    nomeElemento.classList.add("nome-elemento");
    quantitaElemento.classList.add("quantita-elemento");
    bottoneAggiungi.classList.add("bottone-aggiungi");
    bottoneRimuovi.classList.add("bottone-rimuovi");
    
    bottoneAggiungi.textContent = "+";
    bottoneRimuovi.textContent = "-";
    switch (qualeElemento) {
        case FOTO:
            nomeElemento.textContent = "Foto";
            quantitaElemento.textContent = carrello[FOTO];
            riquadro.id = "articolo-foto";
            bottoneAggiungiFoto = bottoneAggiungi;
            bottoneRimuoviFoto = bottoneRimuovi;
            numeroFoto = quantitaElemento;
            break;
        case CAPPELLO:
            nomeElemento.textContent = "Cappello";
            quantitaElemento.textContent = carrello[CAPPELLO];
            riquadro.id = "articolo-cappello";
            bottoneAggiungiCappello = bottoneAggiungi;
            bottoneRimuoviCappello = bottoneRimuovi;
            numeroCappello = quantitaElemento;
            break;
        case MAGLIETTA:
            nomeElemento.textContent = "Maglietta";
            quantitaElemento.textContent = carrello[MAGLIETTA];
            riquadro.id = "articolo-maglietta";
            bottoneAggiungiMaglietta = bottoneAggiungi;
            bottoneRimuoviMaglietta = bottoneRimuovi;
            numeroMaglietta = quantitaElemento;
            break;
        case TAZZA:
            nomeElemento.textContent = "Tazza";
            quantitaElemento.textContent = carrello[TAZZA];
            riquadro.id = "articolo-tazza";
            bottoneAggiungiTazza = bottoneAggiungi;
            bottoneRimuoviTazza = bottoneRimuovi;
            numeroTazza = quantitaElemento;
            break;
    }

    riquadro.appendChild(nomeElemento);
    riquadro.appendChild(quantitaElemento);
    riquadro.appendChild(bottoneAggiungi);
    riquadro.appendChild(bottoneRimuovi);

    elementiNelCarrello.appendChild(riquadro);
}

function rimuoviRiquadro(qualeElemento) {
    var toRemove = document.getElementById("articolo-" + qualeElemento);
    toRemove.parentNode.removeChild(toRemove);
}

function aggiungiFoto() {
    if (carrello[FOTO] == 0) {
        creaRiquadro(FOTO);
        bottoneAggiungiFoto.addEventListener("click", aggiungiFoto);
        bottoneRimuoviFoto.addEventListener("click", rimuoviFoto);
    }
    carrello[FOTO] += 1;
    totaleArticoli += 1;
    totale += PREZZO_FOTO;
    numeroFoto.textContent = nFoto.value = carrello[FOTO];
    aggiornaNumero();
    aggiornaPrezzo();
}

function aggiungiCappello() {
    if (carrello[CAPPELLO] == 0) {
        creaRiquadro(CAPPELLO);
        bottoneAggiungiCappello.addEventListener("click", aggiungiCappello);
        bottoneRimuoviCappello.addEventListener("click", rimuoviCappello);
    }
    carrello[CAPPELLO] += 1;
    totaleArticoli += 1;
    totale += PREZZO_CAPPELLO;
    numeroCappello.textContent = nCappello.value = carrello[CAPPELLO];
    aggiornaNumero();
    aggiornaPrezzo();
}

function aggiungiMaglietta() {
    if (carrello[MAGLIETTA] == 0) {
        creaRiquadro(MAGLIETTA);
        bottoneAggiungiMaglietta.addEventListener("click", aggiungiMaglietta);
        bottoneRimuoviMaglietta.addEventListener("click", rimuoviMaglietta);
    }
    carrello[MAGLIETTA] += 1;
    totaleArticoli += 1;
    totale += PREZZO_MAGLIETTA;
    numeroMaglietta.textContent = nMaglietta.value = carrello[MAGLIETTA];
    aggiornaNumero();
    aggiornaPrezzo();
}

function aggiungiTazza() {
    if  (carrello[TAZZA] == 0) {
        creaRiquadro(TAZZA);
        bottoneAggiungiTazza.addEventListener("click", aggiungiTazza);
        bottoneRimuoviTazza.addEventListener("click", rimuoviTazza);
    }
    carrello[TAZZA] += 1;
    totaleArticoli += 1;
    totale += PREZZO_TAZZA;
    numeroTazza.textContent = nTazza.value = carrello[TAZZA];
    aggiornaNumero();
    aggiornaPrezzo();
}

function rimuoviFoto() {
    carrello[FOTO] -= 1;
    totaleArticoli -= 1;
    totale -= PREZZO_FOTO;
    numeroFoto.textContent = nFoto.value = carrello[FOTO];
    if (nFoto.value == 0) {
        nFoto.value = "";
    }
    if (carrello[FOTO] == 0) {
        rimuoviRiquadro("foto");
    }
    aggiornaNumero();
    aggiornaPrezzo();
}

function rimuoviCappello() {
    carrello[CAPPELLO] -= 1;
    totaleArticoli -= 1;
    totale -= PREZZO_CAPPELLO;
    numeroCappello.textContent = nCappello.value = carrello[CAPPELLO];
    if (nCappello.value == 0) {
        nCappello.value = "";
    }
    if (carrello[CAPPELLO] == 0) {
        rimuoviRiquadro("cappello");
    }
    aggiornaNumero();
    aggiornaPrezzo();
}

function rimuoviMaglietta() {
    carrello[MAGLIETTA] -= 1;
    totaleArticoli -= 1;
    totale -= PREZZO_MAGLIETTA;
    numeroMaglietta.textContent = nMaglietta.value = carrello[MAGLIETTA];
    if (nMaglietta.value == 0) {
        nMaglietta.value = "";
    }
    if (carrello[MAGLIETTA] == 0) {
        rimuoviRiquadro("maglietta");
    }
    aggiornaNumero();
    aggiornaPrezzo();
}

function rimuoviTazza() {
    carrello[TAZZA] -= 1;
    totaleArticoli -= 1;
    totale -= PREZZO_TAZZA;
    numeroTazza.textContent = nTazza.value = carrello[TAZZA];
    if (nTazza.value == 0) {
        nTazza.value = "";
    }
    if (carrello[TAZZA] == 0) {
        rimuoviRiquadro("tazza");
    }
    aggiornaNumero();
    aggiornaPrezzo();
}

function creaVisualizzazioneEstesa() {
    if (document.getElementById("visualizzazione-compatta")) {
        document.getElementById("elenco-giocatori").removeChild(document.getElementById("visualizzazione-compatta"));
    }
    else if (document.getElementById("visualizzazione-estesa")) {
        document.getElementById("elenco-giocatori").removeChild(document.getElementById("visualizzazione-estesa"));
    }

    var contenitore = document.createElement("div");
    contenitore.id = "visualizzazione-estesa";

    for (var i = 0; i < menu.length; i++) {
        var contenitoreAusiliario = document.createElement("div");
        contenitoreAusiliario.classList.add("contenitore-ausiliario");

        var nomeGiocatore = document.createElement("h4");
        var numeroMaglia = document.createElement("h6");
        var ruolo = document.createElement("h5");
        var descrizione = document.createElement("p");
        var annoDiNascita = document.createElement("p");
        var foto = document.createElement("img");

        nomeGiocatore.classList.add("nome-giocatore");
        numeroMaglia.classList.add("numero-maglia");
        descrizione.classList.add("descrizione");
        annoDiNascita.classList.add("anno-di-nascita");
        foto.classList.add("foto-giocatore");
        ruolo.classList.add("ruolo");

        nomeGiocatore.textContent = menu[i].nome;
        numeroMaglia.textContent = "Numero di maglia: " + menu[i].numero_di_maglia;
        ruolo.textContent = "Ruolo: " + menu[i].ruolo;
        annoDiNascita.textContent = "Anno di nascita: " + menu[i].anno_di_nascita;
        descrizione.textContent = menu[i].descrizione;
        foto.setAttribute("src", menu[i].foto);

        contenitoreAusiliario.appendChild(foto);
        contenitoreAusiliario.appendChild(nomeGiocatore);
        contenitoreAusiliario.appendChild(annoDiNascita);
        contenitoreAusiliario.appendChild(ruolo);
        contenitoreAusiliario.appendChild(numeroMaglia);
        contenitoreAusiliario.appendChild(descrizione);

        contenitore.appendChild(contenitoreAusiliario);
    }

    elencoGiocatori.appendChild(contenitore);
}

function creaVisualizzazioneCompatta() {
    if (document.getElementById("visualizzazione-compatta")) {
        document.getElementById("elenco-giocatori").removeChild(document.getElementById("visualizzazione-compatta"));
    }
    else if (document.getElementById("visualizzazione-estesa")) {
        document.getElementById("elenco-giocatori").removeChild(document.getElementById("visualizzazione-estesa"));
    }

    var contenitore = document.createElement("div");
    contenitore.id = "visualizzazione-compatta";

    for (var i = 0; i < menu.length; i++) {
        var contenitoreAusiliario = document.createElement("div");
        contenitoreAusiliario.classList.add("contenitore-ausiliario");

        var nomeGiocatore = document.createElement("h4");
        var numeroMaglia = document.createElement("h6");
        var ruolo = document.createElement("h5");
        var annoDiNascita = document.createElement("p");

        nomeGiocatore.classList.add("nome-giocatore");
        numeroMaglia.classList.add("numero-maglia");
        annoDiNascita.classList.add("anno-di-nascita");
        ruolo.classList.add("ruolo");

        nomeGiocatore.textContent = menu[i].nome;
        numeroMaglia.textContent = "Numero di maglia: " + menu[i].numero_di_maglia;
        ruolo.textContent = "Ruolo: " + menu[i].ruolo;
        annoDiNascita.textContent = "Anno di nascita: " + menu[i].anno_di_nascita;

        contenitoreAusiliario.appendChild(nomeGiocatore);
        contenitoreAusiliario.appendChild(annoDiNascita);
        contenitoreAusiliario.appendChild(ruolo);
        contenitoreAusiliario.appendChild(numeroMaglia);

        contenitore.appendChild(contenitoreAusiliario);
    }

    elencoGiocatori.appendChild(contenitore);
}

function richiediVisualizzazioneEstesa() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            visualizzazioneCorrente = ESTESA;    
            creaVisualizzazioneEstesa();
        }
    }
    richiesta.open("GET", "visualizzazione.php?", true);
    richiesta.send();
}

function richiediVisualizzazioneCompatta() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            visualizzazioneCorrente = COMPATTA;    
            creaVisualizzazioneCompatta();
        }
    }
    richiesta.open("GET", "visualizzazione.php", true);
    richiesta.send();
}

function ordinaPerNome() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            if (visualizzazioneCorrente == ESTESA) {
                creaVisualizzazioneEstesa(menu);                    
            }
            else {
                creaVisualizzazioneCompatta(menu);
            }
        }
    }
    richiesta.open("GET", "menu.php?richiesta=0", true);
    richiesta.send();
}

function ordinaPerNumero() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            if (visualizzazioneCorrente == ESTESA) {
                creaVisualizzazioneEstesa(menu);
            }
            else {
                creaVisualizzazioneCompatta(menu);
            }
        }
    }
    richiesta.open("GET", "menu.php?richiesta=1", true);
    richiesta.send();
}

function ordinaPerRuolo() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            if (visualizzazioneCorrente == ESTESA) {
                creaVisualizzazioneEstesa(menu);
            }
            else {
                creaVisualizzazioneCompatta(menu);
            }
        }
    }
    richiesta.open("GET", "menu.php?richiesta=2", true);
    richiesta.send();
}

function ordinaPerAnno() {
    var richiesta = new XMLHttpRequest();
    richiesta.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menu = JSON.parse(this.responseText);
            if (visualizzazioneCorrente == ESTESA) {
                creaVisualizzazioneEstesa(menu);
            }
            else {
                creaVisualizzazioneCompatta(menu);
            }
        }
    }
    richiesta.open("GET", "menu.php?richiesta=3", true);
    richiesta.send();
}


bottoneAggiungiFotoNegozio.addEventListener("click", aggiungiFoto);
bottoneAggiungiCappelloNegozio.addEventListener("click", aggiungiCappello);
bottoneAggiungiMagliettaNegozio.addEventListener("click", aggiungiMaglietta)
bottoneAggiungiTazzaNegozio.addEventListener("click", aggiungiTazza);

bottoneOrdinaPerNome.addEventListener("click", ordinaPerNome);
bottoneOrdinaPerNumero.addEventListener("click", ordinaPerNumero);
bottoneOrdinaPerRuolo.addEventListener("click", ordinaPerRuolo);
bottoneOrdinaPerAnno.addEventListener("click", ordinaPerAnno);

bottoneVisualizzazioneEstesa.addEventListener("click", richiediVisualizzazioneEstesa);
bottoneVisualizzazioneCompatta.addEventListener("click", richiediVisualizzazioneCompatta);

richiediVisualizzazioneEstesa();
