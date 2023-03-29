//DECLARATION DES VARIABLES
let seconde = 10;

//DECLARATION DES FONCTIONS
//Fonction Start qui créer une variable qui stocke l'interval
function start(){
    let interval = 0;
    interval = setInterval(decompte(), 1000);
}
function stop(){
    clearTimeout(interval);
}

function decompte(){
    seconde--;
    if(seconde != 0){
        let affichage = document.createElement("p");
        affichage.textContent = seconde;
        document.body.append(affichage);
    }
    else {
        stop();
    }
}
//Récupération du boutton
let btn = document.querySelector("#btn");

//Création de l'évènement au clic de l'utilisateur
btn.addEventListener('click', ()=>{
    start();
})

//Création de la fonction start()
