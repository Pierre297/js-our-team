// crea delle variabili che connettono il tipo di imput inserito in html al file js
// creiamo il nostro array di oggetti che rappresentano ciascun membro del team.
// crea cicli for per confrontare le informazioni degli oggetti
// stampa la scheda profilo del membro sull'html

// variabili input entrata
const addBtn = document.getElementById("addMemberButton");
var profileCard = document.querySelector(".team-container");


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


// cicli oggetti
for(let i = 0; i < ourTeam.length; i++) {

    let profileName = '';
    let profileRole = '';
    let profileImg = '';

    for(var key in ourTeam){
        profileName = ourTeam[i].userName;
        profileRole = ourTeam[i].jobRole;
        profileImg = ourTeam[i].profilePicture;

    }

    // display in console profili
    console.log(profileName);
    console.log(profileRole);
    console.log(profileImg);

    // profile Card
    profileCard.innerHTML += `
    <div class="team-card">
    <div class="card-image">
    <img
    src="${profileImg}"
    alt="${profileName}"
     />
    </div>
    <div class="card-text">
    <h3>${profileName}</h3>
    <p>${profileRole}</p>
    </div>
    </div>`

};

// -----------------------------------------------------------------------------------------------------------------------------------------





