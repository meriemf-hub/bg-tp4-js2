"use strict";

// Ici on initialise un tableau d'objets contenant les points de chaque personne (slide 40).
const persons = [
  { id: 1, nom: "nom-1", prenom: "prenom-1", points: 5, selected: false },
  { id: 2, nom: "nom-2", prenom: "prenom-2", points: 10, selected: false },
  { id: 3, nom: "nom-3", prenom: "prenom-3", points: 15, selected: false }
];

// Ici on récupère les éléments HTML à modifier avec le DOM (slide 61).
const form = document.getElementById("person-form");
const tableBody = document.getElementById("person-table-body");
const message = document.getElementById("message");
const lineCount = document.getElementById("line-count");
const totalPoints = document.getElementById("total-points");
const consoleButton = document.getElementById("console-btn");
const deleteSelectedButton = document.getElementById("delete-selected-btn");

// Ici on affiche un message dans la page en modifiant le DOM (slides 91 et 95).
function showMessage(text) {
  message.textContent = text;
}

// Ici on calcule le nombre de lignes et le total des points du tableau (slide 40).
function updateSummary() {
  const total = persons.reduce((sum, person) => sum + person.points, 0);
  lineCount.textContent = `${persons.length} ligne(s)`;
  totalPoints.textContent = `Total point(s)= ${total}`;
}

// Ici on parcourt les données et on crée les lignes du tableau HTML (slides 44 et 54).
function renderTable() {
  tableBody.innerHTML = "";

  persons.forEach((person, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${person.nom}</td>
      <td>${person.prenom}</td>
      <td>${person.points}</td>
      <td><input type="checkbox" class="person-select" data-id="${person.id}" aria-label="Sélectionner ${person.nom}"></td>
    `;

    // appendChild ajoute chaque ligne construite au tableau du DOM (slide 96).
    tableBody.appendChild(row);
    row.querySelector(".person-select").checked = person.selected;
  });

  updateSummary();
}

// Ici on lit et valide les champs avant d'ajouter un objet au tableau (slides 42 et 136).
function addPerson(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const points = Number(document.getElementById("points").value);

  if (!nom || !prenom || !Number.isFinite(points) || points < 0) {
    showMessage("Veuillez remplir correctement tous les champs.");
    return;
  }

  persons.push({ id: Date.now(), nom, prenom, points, selected: false });
  form.reset();
  showMessage("Personne ajoutée.");
  renderTable();
}

// Ici on met à jour la sélection d'une personne selon l'état de sa case (slides 92 et 136).
function updateSelection(event) {
  const checkbox = event.target.closest(".person-select");

  if (!checkbox) {
    return;
  }

  const person = persons.find((item) => item.id === Number(checkbox.dataset.id));

  if (person) {
    person.selected = checkbox.checked;
  }
}

// Ici on supprime du tableau toutes les personnes sélectionnées (slide 40).
function deleteSelected() {
  const selectedCount = persons.filter((person) => person.selected).length;

  if (selectedCount === 0) {
    showMessage("Sélectionnez au moins une ligne à supprimer.");
    return;
  }

  for (let index = persons.length - 1; index >= 0; index--) {
    if (persons[index].selected) {
      persons.splice(index, 1);
    }
  }

  showMessage(`${selectedCount} ligne(s) supprimée(s).`);
  renderTable();
}

// Ici on affiche les données du tableau dans la console (slide 33).
function logTable() {
  console.table(persons);
  showMessage("Le tableau a été affiché dans la console.");
}

// Ici on associe les actions de l'utilisateur aux fonctions correspondantes (slide 136).
form.addEventListener("submit", addPerson);
tableBody.addEventListener("change", updateSelection);
deleteSelectedButton.addEventListener("click", deleteSelected);
consoleButton.addEventListener("click", logTable);

// Ici on affiche les données initiales et leur résumé (slides 54 et 96).
renderTable();