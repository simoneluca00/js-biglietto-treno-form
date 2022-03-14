    // 1)definire i bottoni 
let buttonRun = document.getElementById("sz_btn_run");
let buttonCancel = document.getElementById("sz_btn_cancel");

    // 2) definire campo del prezzo finale
let prezzoFinale = document.getElementById("sz_price_pass");

    // 3)funzione al click del bottone "Esegui"
buttonRun.addEventListener("click",
    function () {
        // 3.1) far comparire la sezione con tutte le indicazioni del biglietto
        var ticketCompleto = document.getElementById("sz_ticket");
        ticketCompleto.classList.remove("d-none");

        // 4)nome del passeggero
        let nomePasseggero = document.getElementById("sz_input_name");

        // 5)km da fare 
        let km = Number(document.getElementById("sz_input_km").value);
        console.log(typeof km);

            // 5.1) MOLTIPLICAZIONE PER IL CALCOLO DEL PREZZO BASATO SUI km
        let tassa = 0.21;

        let prezzoStandard = tassa * km;
        prezzoStandard = Number(prezzoStandard.toFixed(2));
        console.log(typeof prezzoStandard);

        // 6)età del passeggero
        let etaPasseggero = document.getElementById("age-range");

            // 6.1) CALCOLO DEL PREZZO PER I MINORENNI (sconto del 20%) 
        let prezzoMinorenni = (prezzoStandard * 0.8);
        prezzoMinorenni = Number(prezzoMinorenni.toFixed(2));

            // 6.2) CALCOLO DEL PREZZO PER GLI OVER 65 (sconto del 40%)
        let prezzoAnziani = (prezzoStandard * 0.6);
        prezzoAnziani = Number(prezzoAnziani.toFixed(2));

        // 7) nome e prezzo del biglietto stampati sulla pagina
        document.getElementById("sz_name_pass").innerHTML = `${nomePasseggero.value}`;
        document.getElementById("sz_discount_pass").innerHTML = `${etaPasseggero.value}`;
        
        // 8) condizione per eventuali campi vuoti
        if (nomePasseggero.value == "") {
            alert ("Inserire correttamente il nominativo per calcolare il prezzo.")
        } else if (km == 0) {
            alert ("Assicurati che il numero di km che vuoi percorrere sia maggiore di 0.")
        }

        // 9) condizione per il calcolo del prezzo
        if ( etaPasseggero.value == "Minorenne" ) {
           prezzoFinale.innerHTML = `${prezzoMinorenni}€ (IVA Compresa).`;
        }
        
        else if ( etaPasseggero.value == "Over65" ) {
           prezzoFinale.innerHTML = `${prezzoAnziani}€ (IVA Compresa).`;
        }
        
        else {
           prezzoFinale.innerHTML = `${prezzoStandard}€ (IVA Compresa).`;
        }

        // 10) generatore di numeri casuali (carrozza)
        var numeroCarrozza = Math.random();
        numeroCarrozza = Math.floor((numeroCarrozza * 15) + 1); 
        document.getElementById("sz_carriage_pass").innerHTML = `${numeroCarrozza}`;
        
        // 11) generatore di numeri casuali( Codice CP)
        var codiceCp = Math.random();
        codiceCp = Math.floor((codiceCp * 100000) + 10001); 
        document.getElementById("sz_pin_pass").innerHTML = `${codiceCp}`;
        
    }
    
)
    
        // 12)funzione al click del bottone "Annulla"
buttonCancel.addEventListener("click",
    function() {
            // far scomparire la sezione con tutte le indicazioni del biglietto
        var ticketCompleto = document.getElementById("sz_ticket");
        ticketCompleto.classList.add("d-none");
    }
)

