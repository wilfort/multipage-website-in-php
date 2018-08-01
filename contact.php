<?php

     include("./assets/vue/traitement-mail.php");
    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center red">Contact</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3">
            <span class="linebar"></span>
            </div>
        </div>
        <div class="row">           
            <div class="col-12">
                <form action="#" method="post" enctype="multipart/form-data">
                    <div class="row">
                        

                        <div class="col-md-12 col-lg-4">
                            <label for="genre">titre</label>
                        </div>
                        <div class="col-md-12 col-lg-8">
                            <input type="radio" name="genre" id="" value="Mme" checked> Mme
                            <input type="radio" name="genre" id="" value="Melle"> Melle
                            <input type="radio" name="genre" id="" value="Mr."> Mr. 
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
                            <select name="objet" id="">
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
                            <textarea name="message" id="" cols="30" rows="10"><?=$checkMessage?></textarea>
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
                            <input type="radio" name="type" id="" value="HTML" checked> HTML
                            <input type="radio" name="type" id="" value="Texte"> Texte
                        </div>

                        <div class="col-12">
                            <button type="submit" name="envoie">Contactez-moi</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3">
                <span class="linebar"></span>
            </div>
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 my-auto">
                <h1 class="text-center red">Nous avons besoin de dons pour vivre.</h1>
            </div>
            <div class="col-xs-0 col-sm-1 col-md-2 col-lg-3">
                <span class="linebar"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h1 class="text-center red">Don financier</h1>
            </div>
            <div class="col-12">
                <img src="./assets/img/presentation.jpg" alt="">
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
                        Vos dons peuvent  être versés sur notre projet « <a href="http://www.bonnescauses.be/organisation/?id=0884345931&SearchTerm=odyssea%20asbl&autoSuggestWasUsed=5955,fr&Citydistance=5" class="red">Odyssea asbl</a> » (Site de la Fondation Roi Baudoin) jusqu’au <b>30/03/18</b>. C’est la Fondation Roi Baudouin qui vous fournira l’attestation fiscale dont vous aurez besoin pour votre déductibilité.
                    </li>
                    <li>
                        Les dons pour le projet peuvent être versés jusqu’au 30/03/18 au compte <b>IBAN BE10 0000 0000 0404 – BIC: BPOTBEB1</b> de la Fondation Roi Baudouin avec la mention obligatoire ‘128/2887/00017’.
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <h1 class="text-center red">Don matériel</h1>
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