// crea delle variabili che connettono il tipo di imput inserito in html al file js
// creiamo il nostro array di oggetti che rappresentano ciascun membro del team.
// crea cicli for per confrontare le informazioni degli oggetti ccon gli input html
// quando corrispondono stampa la scheda profilo del membro sull'html

// variabili input entrata
var memberName = document.getElementById("name");
var memberRole = document.getElementById("role");
var memberImage = document.getElementById("image");


// oggetti membri
var ourTeam = [
    {
        "userName" : "Angela Caroll",
        "jobRole" : "chief editor",
        "profilePicture" : "img/angela-caroll-chief-editor.jpg",
    },
    {
        "userName" : "Angela Lopez",
        "jobRole" : "social media manager",
        "profilePicture" : "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "userName" : "Barbara Ramos",
        "jobRole" : "graphic designer",
        "profilePicture" : "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        "userName" : "Scott Estrada",
        "jobRole" : "developer",
        "profilePicture" : "img/scott-estrada-developer.jpg",
    },
    {
        "userName" : "Walter Gordon",
        "jobRole" : "office manager",
        "profilePicture" : "img/walter-gordon-office-manager.jpg",
    },
    {
        "userName" : "Wayne Barnett",
        "jobRole" : "Founder ceo",
        "profilePicture" : "img/wayne-barnett-founder-ceo.jpg",
    },
];

let teamMate = false;

// cicli oggetti
for (let i = 0; i < ourTeam.length; i++) {
    let objClass = ourTeam[i];

    for (let key in objClass){
        console.log(key, objClass);
        if (objClass === memberName){
            teamMate = true;
        }
    }
}


