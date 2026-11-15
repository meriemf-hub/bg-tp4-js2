"use strict"; // Mode strict : slide 51

// Compteur du nombre de lignes insérées (let : slide 51)
let lignes = 0;

// NOUVEAU : total des points, initialisé à 0
let total_points = 0;

// Tableau d'objets (slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init() (fonctions : slide 46)
init();

function init() {
    // Boucle for...of (slide 45)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points); // accès aux propriétés : slide 39
    }
}

function doInsert(nom, prenom, points) {
    // NOUVEAU : ajouter les points au total (opérateur combiné += : slide 41)
    total_points += points;

    lignes++; // incrémentation : slide 41
    doInsertRowTable(lignes, nom, prenom, points);

    // NOUVEAU : mettre à jour l'espace résumé
    update_summary();
}

// NOUVEAU : met à jour l'espace résumé
function update_summary() {
    // Récupérer l'élément d'id p1 (getElementById : slide 61)
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément d'id p3 (getElementById : slide 61)
    const element_points = document.getElementById("p3");

    // Modifier le contenu avec innerText (slide 91)
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

function consoleTableau() {
    console.log(persons); // console.log : slide 33
}

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.querySelector("table"); // slide 76
    const row = document.createElement("tr"); // slides 104-105
    row.setAttribute("class", "row"); // slide 107

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // slide 91
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox); // slides 97-98

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1, col2, col3, col4, col5);
    table.append(row);
}