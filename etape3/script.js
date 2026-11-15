"use strict"; // Mode strict : slide 51

// Compteur du nombre de lignes insérées, initialisé à 0
// let pour une variable modifiable : slide 51
let lignes = 0;

// Tableau d'objets : chaque objet a un nom, un prénom et des points (slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init() au chargement du script (fonctions : slide 46)
init();

// init() parcourt le tableau persons et insère chaque personne
function init() {
    // Boucle for...of pour parcourir les objets du tableau (boucles : slide 45)
    for (const person of persons) {
        // Accès aux propriétés d'un objet avec la notation point (slide 39)
        doInsert(person.nom, person.prenom, person.points);
    }
}

// Incrémente le compteur puis insère la ligne avec ce numéro
function doInsert(nom, prenom, points) {
    // Incrémenter lignes de 1 (opérateurs : slide 41)
    lignes++;
    const num = lignes;
    doInsertRowTable(num, nom, prenom, points);
}

// Affiche le contenu du tableau persons dans la console (console.log : slide 33)
function consoleTableau() {
    console.log(persons);
}

// Insère une ligne dans le tableau HTML (code de l'étape 2, inchangé)
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.querySelector("table"); // sélecteur CSS : slide 76
    const row = document.createElement("tr"); // création d'élément : slides 104-105
    row.setAttribute("class", "row"); // setAttribute : slide 107

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // innerText : slide 91
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox); // append : slides 97-98

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}