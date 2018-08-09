<?php

     include("./assets/vue/traitement-mail.php");
    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="page contient information sur le contact et les dons">
    <title>Contactez-nous</title>
    <?php 
        include("./assets/vue/link.php")
    ?>
</head>
<body>
    <?php

        include("./assets/vue/header.php");
    
    ?>
    <section>
        <div class="row">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Accès</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
            <h2>TILT</h2>
            <p>Initié par l’asbl Odyssea</p>

            <h3>Adresse</h3>
            <p>Chemin du Meunier 44 – 1330 Rixensart</p>

            <h3>Numéro de téléphone</h3>
            <p>Les lundis et vendredis de 9h à 13h au 02 633 51 21</p>

            <h3>Numéro de compte du Tilt   Odyssea asbl </h3>
            <p>BE18 0689 3112 6265
            <br>Bic: GKCCBEBB</p>

            <h3>Email</h3>
            <p>info@letilt.be</p>

            <p>Les réservations des groupes scolaires et des fêtes d’anniversaire se font uniquement par téléphone les lundis et vendredis de 9h00 à 13h00.</p>

            <p>Les réservations des stages peuvent se faire en ligne à partir de ce lundi 16 janvier 2017 et par téléphone aux permanences ci-dessus.</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-8 my-auto text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5053.407655914593!2d4.528792028076819!3d50.70688041804618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47c3d6f834458dd5%3A0x10b4ce8e5925fcc9!2sChemin+du+Meunier+44%2C+1330+Rixensart!3m2!1d50.7068805!2d4.5331694!5e0!3m2!1sfr!2sbe!4v1533130870562" 
                width="400" height="300" frameborder="0" style="border:0" allowfullscreen title="plan"></iframe>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
                <p>Vous pouvez envoyer un mail qui nous informera préalablement de votre souhait et nous essayons dans la mesure du possible d’y donner une bonne suite.</p>

                <p>En dehors de ces heures, et pour des questions urgentes uniquement, vous pouvez nous joindre au 0477 662 968.</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Contact</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>

        <div class="row">           
            <div class="col-12">
                <form action="#" method="post" enctype="multipart/form-data">
                    <div class="row">
                        <?=$phpLog?>

                        <div class="col-md-12 col-lg-4">
                            <label for="genre">titre</label>
                        </div>
                        <div class="col-md-12 col-lg-8">
                            <input type="radio" name="genre" id="Mme" value="Mme" checked> <label for="Mme">Mme</label>
                            <input type="radio" name="genre" id="Melle" value="Melle"> <label for="Melle">Melle</label>
                            <input type="radio" name="genre" id="Mr" value="Mr."> <label for="Mr">Mr.</label>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <label for="nom">Nom</label>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <input type="text" name="nom" id="nom" <?=$checkNom?>>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <?=$errorNom?>
                        </div>
                        <div class="col-md-12 col-lg-4">
                        <label for="prenom">Prénom</label>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <input type="text" name="prenom" id="prenom" <?=$checkPrenom?>>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <?=$errorPrenom?>
                        </div>
                        <div class="col-md-12 col-lg-4">
                        <label for="adresse">Email</label>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <input type="email" name="adresse" id="adresse" <?=$checkEmail?>>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <?=$errorEmail?>
                        </div>
                        <div class="col-md-12 col-lg-4">
                        <label for="objet">objet</label>
                        </div>
                        <div class="col-md-12 col-lg-8">
                            <select name="objet" id="objet">
                                <option value="demande d'informations" selected>demande d'informations</option>
                                <!-- <option value=""></option>
                                <option value=""></option>
                                <option value=""></option> -->
                            </select>
                        </div>

                        <div class="col-md-12 col-lg-4">
                            <label for="message">Votre message</label>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <textarea name="message" id="message" cols="30" rows="10"><?=$checkMessage?></textarea>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <?=$errorMessage?>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <label for="upload">Ajouter une pièce jointe</label>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <input type="file" name="upload" id="upload">
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <?=$errorUpload?>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <label for="type">titre</label>
                        </div>
                        <div class="col-md-12 col-lg-8">
                            <input type="radio" name="type" id="HTML" value="HTML" checked> <label for="HTML">HTML</label>
                            <input type="radio" name="type" id="Texte" value="Texte"> <label for="Texte">Texte</label>
                        </div>

                        <div class="col-12">
                            <button type="submit" name="envoie">Contactez-moi</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <!-- <div class="row">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Bon à savoir !</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
            <span class="linebar"></span>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                
            <p>Attention, étant donné les travaux du RER, il est préférable d’indiquer dans le GPS le Ciné Centre de Rixensart avenue de Mérode.</p>

            <p>Ensuite, une fois que vous êtes devant le cinéma, roulez jusqu’au rond-point et là prendre la direction Court-Saint-Etienne.</p>

            <p>Deuxième rue à gauche, l’avenue Boulogne Bilancourt, dans cette rue prendre la 3ème à gauche l’avenue de l’Europe jusqu’au T à gauche, vous êtes chemin du Meunier.</p>

            <p>Le Tilt se trouve dans la cour de la Ferme de Froidmont (dans le bas de la cour à droite).
            <br>SNCB Gare de Rixensart sur les lignes Bruxelles – Ottignies/Louvain-la-Neuve/Namur.
            <br>Le TILT se situe près de la gare, entre 5 et 10 minutes à pied.</p>

            <p>Pour les autocars: Veuillez trouver ci-dessous le plan d’accès. Merci de faire garer l’autocar hors du parking qui appartient à la Fabrique d’église et nous demande de laisser le parking libre la journée</p>
            </div>
            <div class="col-12">
                <img class="mx-auto d-block img-fluid" src="./assets/img/plan-daccès-tilt.jpg" alt="Plan d'accès de Tilt"id="plan">
            </div>
        </div>
        <hr> -->
        <div class="row">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center Cred">Nous avons besoin de dons pour vivre.</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3 my-auto ZPad">
                <span class="linebar"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h1 class="text-center Cred">Don financier</h1>
            </div>
            <div class="col-12">
                <img class="mx-auto d-block img-fluid" src="./assets/img/presentation.jpg" alt="">
            </div>
            <div class="col-12">
                Vous avez envie de faire un don à une association ? Un projet qui a du sens, qui poursuit une mission auprès des jeunes, qui les pousse à réfléchir et qui favorise leur ouverture d’esprit ? Les dons faits à la Fondation donnent droit à <b>une attestation fiscale à partir de € 40</b> (art. 145/33 CIR).
            </div>
            <div class="col-12">
                Deux options s’offrent à vous:
            </div>
            <div class="col-12">
                <ul>
                    <li>
                        Vos dons peuvent  être versés sur notre projet « <a href="http://www.bonnescauses.be/organisation/?id=0884345931&SearchTerm=odyssea%20asbl&autoSuggestWasUsed=5955,fr&Citydistance=5" class="linkred">Odyssea asbl</a> » (Site de la Fondation Roi Baudoin) jusqu’au <b>30/03/18</b>. C’est la Fondation Roi Baudouin qui vous fournira l’attestation fiscale dont vous aurez besoin pour votre déductibilité.
                    </li>
                    <li>
                        Les dons pour le projet peuvent être versés jusqu’au 30/03/18 au compte <b>IBAN BE10 0000 0000 0404 – BIC: BPOTBEB1</b> de la Fondation Roi Baudouin avec la mention obligatoire ‘128/2887/00017’.
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <h1 class="text-center Cred">Don matériel</h1>
            </div>
            <div class="col-12">
                Vous videz votre maison, vous terminez une activité, vous avez des objets de décoration à donner, du papier de dessin, du matériel d’animation à donner, des atlas, des cartes routières, des bijoux de fantaisie ? Vous ne voulez pas jeter ? Nous recyclons, par nos ateliers, dans nos décors, nous aimons transformer vos vieux objets et leur donner une seconde vie.
            </div>
 
        </div>                
    </section>

    <?php
        include("./assets/vue/footer.php");
    ?>		
</body>
</html>