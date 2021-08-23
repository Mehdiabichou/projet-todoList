"use strict";
//notre application
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

//on récupere le tableau des tâches déja existantes
const tasks = ["salle de sport", "se former au dev web", "manger seinement"];
// cest une fonction qui ajoute les taches au DOM avec un bouton de suppression auquel on attache un evenement
function taskToDOM(task) {
  //si on a une chaine non vide
  if (typeof task === "string" && task) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = task;
    remove.textContent = "REMOVE";
    //bouton de suppression auquel on attache un evenement
    remove.addEventListener("click", () => {
      list.removeChild(remove.parentNode);
    });

    li.appendChild(remove);
    list.insertBefore(li, list.firstChild);
  }
}

//on ajoute chaque tache à la liste à puces

tasks.forEach((task) => taskToDOM(task));

//On gere l'ajout de tache avec le bouton ADD et la touche 'Enter'

function newTask() {
  input.focus();
}
add.addEventListener("click", newTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});
//on supprime la liste du DOM et du navigateur
clear.addEventListener("click", () => {
  list.innerHTML = "";
});
// on gere l'importation des taches
