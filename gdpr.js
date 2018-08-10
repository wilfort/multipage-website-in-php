//create jquery type selectors
const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)];

$('#submit')
    .addEventListener("click", function(event){
        if (document.querySelector('input[name="privacy"]:checked').value!='oui'){
        event.preventDefault();
        alert ('Sans ces données, nous ne pouvons répondre à votre requête. Veuillez nous contacter par téléphone ou via votre service de messagerie éléctronique.')
        }
    })

    