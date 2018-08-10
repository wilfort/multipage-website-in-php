<script>
//create jquery type selectors
const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)];
let privacyCheck=false;

function checkRadio (button){
    button.addEventListener("click",function(event){
        privacyCheck=true;
    })
};
checkRadio($('#yes'));
checkRadio($('#no'));

$('#submit')
    .addEventListener("click", function(event){
        if (privacyCheck==false){
            event.preventDefault();
            alert ('Veuillez choisir une option quant à la conservation de vos données');
        };

        if (document.querySelector('input[name="privacy"]:checked').value =='no'){
            privacyCheck=true;
            event.preventDefault();
            alert ('Sans ces données, nous ne pouvons répondre à votre requête. Veuillez nous contacter par téléphone ou via votre service de messagerie éléctronique.')
        }
        
        else if (document.querySelector('input[name="privacy"]:checked').value =='yes'){
            privacyCheck=true;
        };



    })
</script>


