![Kasa](/src/assets/images/kasa.png)

## Introduction

Ce projet est le 11e projet de la formation ["Développeur d'applications JavaScript et React"](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react) de Openclassrooms.

Pour ce projet, Openclasrooms nous fournit des consignes comme le scénario, les contraintes techniques et fonctionnelles, ou encore les maquettes.

## Scénario

Dans ce projet, je suis un développeur front-end en freelance missionné pour développer la nouvelle plateforme web de l'entreprise Kasa, une entreprise de location d’appartements entre particuliers.

La CTO a lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.

Ma mission est donc de développer le front-end de l'ensemble de l'application en utilisant les composants React, les routes avec React Router, et en suivant les maquettes Figma (responsives !).

## Contraintes

Ce projet nous impose des contraintes techniques (ce qu'il faut utiliser et comment les utiliser), et des contraintes fonctionnelles (comment l'application doit fonctionner).

### Contraintes techniques

- Outils :

  - Utilisation de Create React App (création du dossier React)
  - Utilisation de React Router (gérer les différentes routes)
  - Pas de librairie React externe

- React :

  - Découpage du code en composants modulaires et réutilisables
  - Un composant par fichier
  - Structure logique des différents fichiers
  - Utilisation des props entre les composants
  - Utilisation du state dans les composants quand c'est nécessaire
  - Gestion des événements
  - Utilisation des listes, notamment avec la fonction _map_

- React Router :

  - Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
  - Il existe une page par route.
  - La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
  - La logique du routeur est réunie dans un seul fichier.

### Contraintes fonctionnelles

- Galerie :

  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
  - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

- Collapse :

  - Par défaut, les Collapses sont fermés à l'initialisation de la page.
  - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Maquettes

Vous pouvez retrouver les maquettes de ce projet en [cliquant ici](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design)

## Insatallation

Si vous souhaitez reprendre ce projet, vous pouvez suivre les indications ci-contre :

### Prérequis

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Cloner le repository :

- `git clone https://github.com/Emiliengrbn/Kasa.git`

### Installer toutes les dépendances :

- `npm install` ou `yarn`

### Lancer le projet :

- `npm start` ou `yarn start`
