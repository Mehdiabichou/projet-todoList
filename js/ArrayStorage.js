"use strict";

// stockage local de nos tâches
class ArrayStorage {
  //un constructor pour initialisé l'objet avec le nom de  de la clé et son contenu c-a-d la valeur
  constructor(name) {
    this.name = name;
    this.list = this.get();
  }
  //une méthode pour récuperer un tableau des valeurs ou par defaut creer le tableau des taches
  get() {}

  //une méthode pour ajouter une valeur dans le tableau
  set() {}

  //une méthode pour supprimer une valeur du tableau
  remove(value) {}

  //une méthode qui permet de vider tous le tableau
  clear() {}
}
