![GitHub release (latest by date)](https://img.shields.io/github/v/release/Assem92/Fungikey)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/Assem92/FUngikey)<a href="https://www.codacy.com/gh/Assem92/Fungikey/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Assem92/Fungikey&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/a4e163d604aa457b8374bec4c79e0d44"/></a>
[![Maintainability](https://api.codeclimate.com/v1/badges/0deb4ad01a8bd65f4c5c/maintainability)](https://codeclimate.com/github/Assem92/Fungikey/maintainability)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Assem92/Fungikey/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Assem92/Fungikey/tree/master)

# Fungikey

**Fungikey**, l'application pour tout savoir sur les champignons.

## Parlons champignons !

L’application demandée est destinée à être utilisée par des étudiants en pharmacologie, des passionnés de fongiques et tout simplement un public général, avec des supports type smartphone (Android, iOS). L’application devra également être autonome, c’est-à-dire utilisable sans connexion, et permettra aux utilisateurs d’apprendre à identifier des champignons.
Il n’y a pas de suite et maintenance prévue pour Fungikey 2024
Il existe de nombreuses applications sur le marché dans le thème de la reconnaissance de champignons : Champignouf, Aux champignons, Picture Mushroom sont parmi les plus téléchargées sur le Play Store, chacun accumulant plus d'un million de téléchargements ; ils sont cependant axés pour des utilisateurs voulant cueillir des champignons, et non pour des étudiants. En effet, ces applications se concentrent plus sur une identification facile de champignons, comme par analyse d’image, plutôt qu’un fonctionnement par tableau avec des clés. Fungikey 2024 diffère par le contexte éducatif et académique : en effet, une petite partie de ces utilisateurs seront des étudiants en filière pharmacie. Ces derniers ont besoin d’apprendre à identifier des champignons, leurs familles, et à connaître leur toxicité, dans le cadre de leurs études.

## Construit avec

Cette section liste les principaux frameworks/bibliothèques utilisés pour démarrer notre projet.

- [![Node][node.js]][node-url]
- [![React][react.js]][react-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![JQuery][jquery.com]][jquery-url]

## Manuel d'installation et d'utilisation:

Afin de lancer l'application, il convient de suivre quelques étapes:

1. Ouvrir un terminal, faire un `git clone https://github.com/Assem92/Fungikey` sur votre Desktop.

2. Après avoir cloner le repository sur votre machine, il faudra télécharger et installer le package [nodeJS](https://nodejs.org/fr/download/current/), élément important pour lancer l'application.

3. Une fois l'installation finie, se rendre dans le dossier `branches/fungikey-backend`, et lancer les commandes suivants sur le Terminal:

```
npm install
npm start
```

cela va lancer le backend NodeJS sur le port 3001 : `http://localhost:3001/`

4. Se rendre dans le dossier `branches/fungikey`, et lancer les commandes suivantes sur le Terminal:

```
npm install
npm start
```

cela va lancer le frontend React sur le port 3000 : `http://localhost:3000/`


## Conteneurisation

Ce projet peut être facilement exécuté dans un conteneur Docker. Pour ce faire, suivez les étapes ci-dessous :

1. Assurez-vous que Docker est installé sur votre machine. Vous pouvez télécharger Docker [ici](https://www.docker.com/get-started).

2. Construisez l'image Docker en exécutant les commandes suivantes dans votre terminal :

```
docker build -t fungikey-backend -f fungikey-backend/Dockerfile fungikey-backend
docker build -t fungikey-frontend -f Fungikey/Dockerfile Fungikey

```

Assurez-vous d'être dans le répertoire racine du projet lors de l'exécution de cette commande.

3. Une fois l'image construite, lancez le conteneur en exécutant la commande suivante :

```
docker run -p 3000:3000 fungikey-frontend
docker run -p 3001:3001 fungikey-backend
```

Ces commande exposera le port 3000 du conteneur Docker sur le port 3000 de votre machine locale pour le frontend et exposera le port 3001 du conteneur Docker sur le port 3001 de votre machine locale pour le backend . 

Vous pouvez modifier les ports exposés en fonction de vos besoins.

4. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour accéder à l'application.

Vous êtes maintenant prêt à utiliser l'application dans un environnement conteneurisé !

Si vous souhaitez arrêter le conteneur, vous pouvez le faire en utilisant la commande `docker stop [nom ou ID du conteneur]`.

N'oubliez pas de remplacer "nom-de-l-image" par le nom que vous avez donné à votre image Docker.

## API

Pour voir la documentation détaillée de l'API avec Swagger il faut lancer le backend comment il expliqué dans la section précedente , puis il faut visiter le lien `http://localhost:3001/api-docs/`

les différentes routes de l'API:
  - `api/champi/` : get mushroom list
  - `api/champi/{id}` : get mushroom by id
  - `api/familleChampi/` : get mushroom familly list
  - `api/familleComplementaires/` : get mushroom complementary familly list
  - `api/recette/` : get recipe list
  - `api/recette/{id}` : get recipe by id
  - `/closest-points/:latitude/:longitude` : Returns the 3 closest champigions
  - `/location` : POST - Adds a new location of champignons
  - `/posts` : GET - Returns all the posts on the forum
  - `/posts` : POST - Adds a new post
  - `/products` : POST - Ajoute un nouveau produit
  - `/products/:id` : PUT  - Met à jour le produit par ID
  - `/products/:id` : DELETE {} - Supprime le produit par ID
  - `/periodes` : GET - Returns all the periode data
  - `/periodes/:id` : GET  - Returns the periode data for the specified id

## Contributions

Les contributions sont ce qui fait de la communauté open source un endroit incroyable pour apprendre, inspirer et créer. Toutes les contributions que vous apportez sont grandement appréciées.

Si vous avez une suggestion qui améliorerait cela, veuillez bifurquer le dépôt et créer une demande d'extraction. Vous pouvez aussi simplement ouvrir un ticket avec le tag "amélioration". N'oubliez pas de mettre une étoile au projet ! Merci encore!

1. Fork le projet
2. Créez votre branche de Feature (`git checkout -b feature/AmazingFeature`)
3. Validez vos modifications (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Ouvrir une demande d'extraction

<!-- LICENSE -->

## License

Distribuée sous la licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Voir le fichier LICENSE pour plus d'informations.

## Auteurs

- [Assem AOUSSAR](https://github.com/Assem92)
- [Omar EL FACHATI](https://github.com/ofachati)
- [Kemokoba BAYO](https://github.com/Kems93)
- [Ghenima OULD AHMED](https://github.com/ghenima-ouldahmed)
- [Mohamed KONATE](https://github.com/MohamedKonate)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[node.js]: https://img.shields.io/badge/Node-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[node-url]: https://nodejs.org/en/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
