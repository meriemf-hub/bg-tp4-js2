"use strict"; // Mode strict : slide 51

// Compteur de lignes et total des points (let : slide 51)
let lignes = 0;
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
        doInsert(person.nom, person.prenom, person.points); // slide 39
    }
}

function doInsert(nom, prenom, points) {
    total_points += points; // opérateur combiné : slide 41
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function update_summary() {
    const element_lignes = document.getElementById("p1"); // slide 61
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)"; // innerText : slide 91
    element_points.innerText = "Total point(s)= " + total_points;
}

function doNewData() {
    // Récupérer les champs de saisie (getElementById : slide 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Lire l'attribut value (slide 93) ; parseInt convertit le texte en entier
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Vérifier qu'aucun champ n'est vide (if...else : slide 42)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !"); // alert : BOM, slide 116
    } else {
        doInsert(nom, prenom, points);
        persons.push({ nom: nom, prenom: prenom, points: points }); // tableaux : slide 38

        // Vider les champs
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function consoleTableau() {
    console.log(persons); // slide 33
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