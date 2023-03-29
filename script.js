//STEP2
let btn = document.querySelector("#btn");
let interval; 
let seconde = 10;
//STEP3
// btn.addEventListener('click', ()=>{
//     start();
// })
//CORRECTION
btn.addEventListener('click', start);

// function start(){
//     let interval = 0;
//     interval = setInterval(decompte(), 1000);
// }
//CORRECTION
function start() {
    interval = setInterval(decompte, 1000); 
}

// function stop(){
//     clearTimeout(interval);
// }
//CORRECTION
function stop(){
    clearInterval(interval)
    document.body.innerHTML += "STOP"
}

// function decompte(){
//     seconde--;
//     if(seconde != 0){
//         let affichage = document.createElement("p");
//         affichage.textContent = seconde;
//         document.body.append(affichage);
//     }
//     else {
//         stop();
//     }
// }
//CORRECTION
function decompte(){
        seconde--;
        if(seconde == 0){
            stop();
        }
        else {
           document.body.innerHTML += seconde + '<br>';
        }
}



