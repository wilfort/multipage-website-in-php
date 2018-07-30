<?php

    //include("/assets/vue/traitement-mail.php");
    include ("/assets/php/upload.php");

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
        
                <form action="#" method="post" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-12">
                            <h4>Contact</h4>
                        </div>
                        <div class="col-4">
                            <label for="gender">titre</label>
                        </div>
                        <div class="col-8">
                            <input type="radio" name="gender" id="" value="Mme"> Mme
                            <input type="radio" name="gender" id="" value="Melle"> Melle
                            <input type="radio" name="gender" id="" value="Mr."> Mr. 
                        </div>
                        <div class="col-4">
                            <label for="nom">Nom</label>
                        </div>
                        <div class="col-8">
                            <input type="text" name="nom" id="nom">
                        </div>
                        <div class="col-4">
                        <label for="prenom">Prénom</label>
                        </div>
                        <div class="col-8">
                        <input type="text" name="prenom" id="prenom">
                        </div>
                        <div class="col-4">
                        <label for="adresse">Email</label>
                        </div>
                        <div class="col-8">
                        <input type="email" name="adresse" id="adresse">
                        </div>
                        <div class="col-4">
                        <label for="objet">Objet</label>
                        </div>
                        <div class="col-8">
                            <select name="objet" id="">
                                <option value="info">Demande d'informations</option>
                                <!-- <option value=""></option>
                                <option value=""></option>
                                <option value=""></option> -->
                            </select>
                        </div>
                        <div class="col-4">
                            <label for="message">Votre message</label>
                        </div>
                        <div class="col-8">
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="col-4">
                            <label for="upload">Ajouter une pièce jointe</label>
                        </div>
                        <div class="col-8">
                            <input type="file" name="upload" id="upload"><br>
                        </div>
                        <div class="col-4">
                            <label for="type">titre</label>
                        </div>
                        <div class="col-8">
                            <input type="radio" name="type" id="" value="HTML"> HTML
                            <input type="radio" name="type" id="" value="Texte"> Texte
                        </div>
                        <div class="col-12">
                            <button type="submit">Contactez-moi</button>
                        </div>
                    </div>
                </form>
            
    </section>
    <?php

        include("./assets/vue/footer.php");

    ?>		
</body>
</html>