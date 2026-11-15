"use strict"; // Mode strict : signale les variables non déclarées (slide 51, bonnes pratiques slide 141)

// Fonction avec paramètres, appelée par l'événement onclick du bouton (fonctions : slide 46)
// Les commentaires // sur une ligne : syntaxe (slide 36)
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau avec un sélecteur CSS (slide 76)
    // const : constante, on ne la réaffecte pas (slides 37 et 51)
    // Un élément HTML est un objet avec propriétés et méthodes (slide 86)
    const table = document.querySelector("table");

    // Créer un élément tr à partir de zéro (création d'un élément : slides 104-105)
    const row = document.createElement("tr");

    // Affecter la valeur "row" à l'attribut class avec setAttribute (slide 107)
    row.setAttribute("class", "row");

    // Créer 5 éléments td, un par colonne (createElement : slides 104-105)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu avec la propriété innerText : texte simple (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox
    // (création d'élément : slides 104-105 ; attribut : slide 107)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox); // append() : ajoute à la fin de l'élément (slides 97-98)

    // Affecter les classes CSS de chaque colonne avec setAttribute (slide 107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne avec append() (slides 97-98)
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau : insertion dans le DOM (slides 103-105)
    table.append(row);
}