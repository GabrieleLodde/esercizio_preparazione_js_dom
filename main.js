let obj = {
    pizzeria: "Otello",
    indirizzo: "Via tal dei Tali, 1 - Firenze",
    recensioni: [ 
             { nome: "Mario", descrizione: "Pizza buonissima"},
             { nome: "Sara", descrizione: "Pizza ottima ma tempi di attesa troppo lunghi"},
   
             { nome: "Mario", descrizione: "Non fanno pizza senza glutine "}
    ]
} 
const tag_h1 = document.querySelector("#nome")
const tag_h2 = document.querySelector("#indirizzo")
const tagBtn = document.querySelector("#bottoneMostra")
const tagTbody = document.querySelector("#corpoTabella")

tag_h1.style.color = "gray"
tag_h2.style.color = "purple"
tag_h1.innerHTML = obj.pizzeria
tag_h2.innerHTML = obj.indirizzo



function mostraLeva(){
    if(tagBtn.innerHTML == "Mostra recensioni"){
        tagBtn.innerHTML = "Nascondi recensioni"
        creaDati()
    }
    else if(tagBtn.innerHTML == "Nascondi recensioni"){
        tagBtn.innerHTML = "Mostra recensioni"
        while (tagTbody.hasChildNodes()) {
            tagTbody.removeChild(tagTbody.firstChild);
        }
    }
}

function creaDati(){
    let riga
    let datoUtente
    let datoDescrizione
    obj.recensioni.forEach(recensione => {

        //creazione dei tag tr e td
        riga = document.createElement("tr")
        datoUtente = document.createElement("td")
        datoDescrizione = document.createElement("td")

        //creazione e valorizzazione dei nodi di testo
        let testoCampo1 = document.createTextNode(recensione.nome)
        let testoCampo2 = document.createTextNode(recensione.descrizione)

        //aggiunta del testo ai tag creati 
        datoUtente.appendChild(testoCampo1)
        datoDescrizione.appendChild(testoCampo2)
        
        //aggiunta dei tag creati al tag tr
        riga.appendChild(datoUtente)
        riga.appendChild(datoDescrizione)
        
        //aggiunta del tag tr al tag tBody
        tagTbody.appendChild(riga)
    })
}