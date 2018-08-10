<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Description" content="Put your description here.">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Le Tilt</title>
    <meta name="theme-color" content="#317EFB" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Le Tilt">
	<link rel="apple-touch-icon" href="./assets/img/logo.png">
    <meta name="msapplication-TileImage" content="./assets/img/logo.png">   
	<meta name="msapplication-TileColor" content="#2F3BA2">
    <?php 
        include("./assets/vue/link.php")
    ?>
    <link rel="manifest" href="./manifest.json">
    <link rel="stylesheet" type="text/css" href="assets/css/cookieconsent.min.css" />
    <script src="assets/js/cookieconsent.min.js"></script>
    <script>
    window.addEventListener("load", function(){
    window.cookieconsent.initialise({
    "palette": {
        "popup": {
        "background": "#000"
        },
        "button": {
        "background": "transparent",
        "text": "#f1d600",
        "border": "#f1d600"
        }
    }
    })});
</script>
</head>
<body>
    <?php

    include("./assets/vue/header.php");

    ?>
    <section>
        <div class="row">
            <div class="col-12">
                <h2>Le Tilt c’est…</h2>
                <p>
                    Un lieu unique d’animation et de formation pour les enfants, les jeunes. L’objet de nos activités est celui de la découverte de la diversité du monde qui nous entoure et par là même la construction de soi. Nous tendons vers cet objectif par une approche
                </p>
                <ul>
                    <li>ludique,</li>
                    <li>réflexive,</li>
                    <li>d’expression créative,</li>
                    <li>durable,</li>
                    <li>et expérimentale</li>
                </ul>
                <p>
                    qui contribue à une prise de conscience de l’être dans ses compétences, ressources, talents, et richesses au sein de son environnement. Nous mettons le Tilt à la disposition de nos participants pour qu’ils construisent des projets en utilisant leurs compétences et leurs potentiels, et poursuivent notre finalité d’ouverture à la diversité.
                </p>
                <p>
                    Par ces propositions, ces animations, ces invitations, ces actions, nous espérons donner aux participants l’opportunité de devenir des citoyens actifs, responsables, critiques,créatifs et solidaires (CRACCS). 
                </p>
                <p>
                    Le Tilt est un Centre d’ Ouverture au monde, et est aussi reconnu comme Centre d’Expression et de Créativité , terrain d’expérimentation, espace de réflexion,
                </p>
                <ul>
                    <li>
                        où l’on parcourt le monde, les continents, à la rencontre des autres communautés, de leur culture et de leur rapport au monde.
                    </li>
                    <li>
                        où l’on encourage la réflexion personnelle, l’expression, l’imagination pour tout un chacun; des outils essentiels quelles que soient son origine ou sa situation.
                    </li>
                </ul>
            </div>
            <div class="col-12 my-auto text-center">
                <figure>
                    <video width="360" height="280" controls="controls">
                        <source src="./assets/video/video-presentation-du-tilt.mp4" type="video/mp4">
                    </video>
                    <figcaption>Le Tilt ASBL </figcaption> 
                </figure>
            </div>
            <div class="col-12 my-auto text-center">
                Nous vous proposons diverses activitées :
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 offset-sm-3 col-md-4 offset-md-2 col-lg-4 offset-lg-2">
                <div>
                    <h3>Pour les enfants :</h3>
                    <ul>
                        <li>
                            <b>Ateliers</b>
                        </li>
                        <li>
                            <b>Anniversaire</b>
                        </li>
                        <li>
                            <b>Famille</b>
                        </li>
                        <li>
                            <b>Explorateur</b>
                        </li>
                        <li>
                            <b>Groupes</b>
                        </li>
                        <li>
                            <b>Ecole</b>
                        </li>
                    </ul>
                    <br>
                    <a class="bouton" href="enfant.php">Pour plus information</a>
                    <br>
                    <br>
                </div>
            </div>
            <div class="col-sm-6 offset-sm-3 col-md-4 offset-md-0 col-lg-4 ">
                <div class="mx-auto d-block">
                    <h3>Pour le travail :</h3>
                    <ul>
                        <li>
                            <b>Location</b>
                        </li>
                        <li>
                            <b>Les stages</b>
                        </li>
                        <li>
                            <b>Formations</b>
                        </li>
                    </ul>
                    <br>
                    <a class="bouton" href="prof.php">Pour plus information</a>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </section>
    <?php

    include("./assets/vue/footer.php");

    ?>
</body>
</html>