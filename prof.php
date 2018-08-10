<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Description" content="Put your description here.">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <?php 
        include("./assets/vue/link.php")
    ?>
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
                <nav class="navbar navbar-expand-sm navCol">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#Location"><b>Location</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#stages"><b>Les stages</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#Formations"><b>Formations</b></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="row" id="Location">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Location</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>Nous disposons de 165m² d’espaces entièrement rénovés pouvant être mis en location à l’année ou en soirée/journée pour vos événements, conférences, ateliers, etc. Nous proposons nos espaces pour organiser un évènement en lien avec l ‘Éducation ou le bien-être.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <p><b>Salle Odyssea (80m²)</b></p>              
                <ul>
                    <li>Cuisine équipée intégrée au local</li>
                    <li>Tables et chaises pour 50 personnes</li>
                    <li>Rétroprojecteur et matériel hi-fi (régisseur sur demande)</li>
                    <li>Grand panneau de liège pour afficher vos documents</li>
                </ul>               
                <p><b>Grand atelier (50m²)</b></p>
                <ul>
                    <li>Cuisine équipée intégrée au local</li>
                    <li>Tables et chaises pour 20 personnes</li>
                </ul>
                <p><b>Amphithéâtre (36m²)</b></p>
                <ul>
                    <li>Espace cosy pour environ 15 personnes</li>
                </ul>
                <p>
                    Tarifs sur demande. Disponibilité selon certaines conditions.<br>
                    Contactez-nous à <a href="mailto:location@letilt.be" target="_blank" rel="noopener noreferrer" class="linkred">info@letilt.be</a> pour plus d’information.
                </p>                    
            </div>
            <div class="col-md-12 col-lg-6">
            
            <img class="mx-auto d-block img-fluid" src="./assets/img/local.jpg" alt="local">
            </div>
        </div>
        <hr>
        <div class="row" id="stages">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Les stages</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            <img class="mx-auto d-block img-fluid taillePhotoS animated rotateIn infinite" src="./assets/img/logoStage.png" alt="stage">
            </div>
            <div class="col-md-12 col-lg-6">
            <img class="mx-auto d-block img-fluid" src="./assets/img/StageSite.png" alt="stage">
            </div>
            <div class="col-md-12 col-lg-6">
                <p>Un stage au Tilt, c’est une semaine à construire son projet, une invitation à la découverte du <b>monde</b> et des autres cultures.</p>
                <p>Durant les stages, <b>l’espace (près de 800m2)</b> , l’accès au <b>jardin</b>, à notre <b>aire de jeux</b>, l’accès à la cour de la ferme de Froidmont et au petit <b>bois</b> à l’arrière du bâtiment est réservé aux participants.</p>
                <p>En été et au printemps, un stage au Tilt, c’est surtout : jouer (dehors et dedans), flâner, créer, danser, crier, se reposer, inventer, initier, rêver, discuter,remettre en question, découvrir, se connaître, prendre l’air … tous ensemble… Profiter de ses vacances en fin de compte !</p>
                <p>Nous aimons favoriser de petits groupes avec deux animatrices/teurs qualifiées-és ( reconnues/us par l’<b>ONE</b>). Nous travaillons avec les enfants, les jeunes, les volontaires, les membres de l’Assemblée Générale, l’équipe d’animation, la cellule pédagogique à la préparation des stages dans une optique <b>participative</b> d’une part, et de <b>détente</b> d’autre part.</p>
            </div>
            <div class="col-12">
                <p>Nous aimons avoir des temps de parole en groupe qui nous permettent d’évaluer les souhaits, les envies, l’énergie du groupe, mais aussi les avis, les besoins, les idées, les propositions d’action qui nous permettent de prendre l’une ou l’autre direction durant le stage. Chaque jour, nous <b>créons et réinventons ensemble</b> une série d’animations liées au thème du stage, et de temps de jeux, d’activités libres individuelles ou collectives. Nous allons explorer le thème du stage avec la curiosité d’un jeune explorateur et nous émerveiller de la diversité dans le monde depuis le coeur du Brabant-Wallon…</p>
                <p>Et surtout nous aimons faire les fous, nous sentir libres le nez en l’air et les cheveux au vent… Aller là où le groupe nous mène avec son énergie, feuilleter dans notre palette d’idées, aller fouiller le grenier, et les recoins de nos espaces pour créer et choisir une activité ou des missions qui nous plaisent  et nous rendent <b>heureux</b>.</p>
            </div>
            <div class="col-6">
            <img class="mx-auto d-block img-fluid taillePhotoS" src="./assets/img/logoFouet.png" alt="fouet">
            </div>
            <div class="col-6">
            <h5>Horaires</h5>
            <p>Garderie de 8h à 17h45<br>
            Activités de 9h à 16h.</p>
            </div>
            <div class="col-6">
            <img class="mx-auto d-block img-fluid taillePhotoS" src="./assets/img/logoCrayon.png" alt="Crayon"> 
            </div>
            <div class="col-6">
            <h5>Tarifs</h5>
            <p>27 €/jour soit 135 €<span class="Cred">*</span> pour les stages d’une semaine / 108 €<span class="Cred">*</span> pour les semaines avec un jour férié.<br>
            10% de réduction à partir du 2ème enfant.<br>
            Tarif Article 27 disponible sur simple demande. Réduction de 5 euros pour les membres de la Ligue des familles.<br>
            Garderie : 2 euros par famille par garderie.<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span class="Cred">*</span> Le montant de l’inscription ne doit pas être un frein à la participation.</p>
            </div>
            <div class="col-12">
            <h5>Bon à savoir</h5>
                <ul>
                <li>En collaboration avec la <b>Bibliothèque</b> de Froidmont, nous passerons durant chaque stage un temps de conte et d’éveil à la lecture avec vos enfants.</li>
                <li>Nos animateurs sont permanents, ils animent des groupes d’enfants toute l’année.</li>
                <li>Afin de poursuivre nos objectifs d’ouverture au monde, nous organisons une sortie/invitons un intervenant par semaine.</li>
                <li>Tous les vendredis de nos stages, nous cuisinons ensemble un repas festif et inventif. (N’hésitez pas à communiquer les allergies ou intolérances alimentaires afin que nous adaptions au mieux le repas de votre enfant.)</li>
                <li>Nos stages sont agréés par l’<b>ONE</b> vous bénéficiez donc d’une <b>attestation fiscale</b> en fin de stage (Pour les stages de minimum 72h)<br>
                Nous complétons également volontiers vos documents qui permettent de récupérer une partie du prix du stage via votre mutuelle.</li>
                <li><a class="linkred" href="./assets/pdf/2018CONDGENSTG.pdf">Conditions générales de stage 2018</a></li>
                </ul>                      
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <img class="mx-auto d-block img-fluid taillePhotoS" src="./assets/img/stage-2016.jpg" alt="photo stage 1"> 
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <img class="mx-auto d-block img-fluid taillePhotoS" src="./assets/img/stage-2016-2.jpg" alt="photo stage 2"> 
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <img class="mx-auto d-block img-fluid taillePhotoS" src="./assets/img/stage-2016-3.jpg" alt="photo stage 3"> 
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row" id="Formations">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Formations</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            <img class="mx-auto d-block img-fluid" src="./assets/img/formation.jpg" alt="formation"> 
            </div>
            <div class="col-12">
            <p>Forts de notre expérience avec les groupes d’enfants et les familles, nous avons développé une série de méthodes pédagogiques et d’outils précieux dans le but de mettre le participant en situation de plaisir d’apprentissage. Nous souhaitons à présent partager cela en proposant des formations destinées aux adultes, professionnels de l’enfance qui souhaiteraient enrichir leurs capacités à faire émerger l’expression créative chez l’enfant.</p>

<p><span class="Cred">« Je n’ai aucun talent », « je n’ai pas d’imagination »</span>. Nous débattrons sur ces phrases si souvent entendues et nous apprendrons à faire connaissance avec notre potentiel créatif pour encourager son émergence. Un temps pour sortir de ses habitudes et ainsi vivre sa créativité pour mieux la cerner. Par le partage, l’expérimentation, le jeu, l’échange… Nous approcherons l’expression créative de manière individuelle et collective.</p>

<p>1. <b>« Les indispensables de la créativité »</b></p>
<p>Par des jeux et des réflexions de groupes, les participants seront amenés à réfléchir à la créativité et à comment ils la pratiquent dans leur travail. Ils seront ensuite amenés à participer à des ateliers animés, pour être plongé dans leur propre potentiel créatif. Ils pourront dès lors analyser les étapes et les démarches que le formateur à mis en place, ainsi que les outils et les médiums utilisés lors des ateliers.</p>

<p>2. <b>« La créativité est-elle accessible à tous? »</b></p>

<p>Où se trouve la créativité en nous? La créativité, un talent artistique ou une compétence à acquérir? Créer, est-ce seulement pour les enfants? Est ce que tous les enfants sont créatifs? … Autant de questions sur lesquelles nous nous poserons et sur lesquelles nous porterons une réflexion collective.</p>

<p>En pratique:</p>
<ul>
<li>Les modules que nous proposons sont indépendants et durent 2 jours chacun.</li>
<li>Nous pouvons ajuster le timing selon votre demande afin, par exemple, de concentrer la formation sur un seul jour ou au contraire d’approfondir le thème sur une période plus longue.</li>
<li>En groupe de minimum 10 participants/maximum 16 participants: 360€/jour.</li>
<li>Pour des groupes de 17 à 32 participants: 700€/jour (2 formateurs)</li>
</ul>
            </div>
        </div>
    </section>
    <?php

    include("./assets/vue/footer.php");

    ?>
</body>
</html>