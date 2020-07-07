/** 
 * Code de gestion du formulaire
 */

//------------------------verification de l'email--------------------------------------------
    const formulaire = document.querySelector('form');

    formulaire.email.addEventListener('change', function () {
            emailcorrect(this)
        });

    const emailcorrect = function (saisiEmail) {

        //L'Expression Reguliere de validation de l'email
        let myEmail = /^[a-z0-9]+[@][a-z0-9]+\.[a-z]+$/i;
        let emailTest = myEmail.test(saisiEmail.value);
        let message = document.querySelector('.message');
        
        //Teste des valeurs saisie de l'utilisateur
    if (emailTest) {
        message.innerHTML = "L'Adresse email est valide";
        message.classList.add('message-visible');
        message.style.background = 'green';
    }
    else{
        message.innerHTML = "L'Adresse email est invalide ou vide";
        message.classList.add('message-visible');
        message.style.background = 'red';
        }
    };
//------------------------verification du mot de passe------------------------------------------
    form.pass.addEventListener('change', function () {
        motDePassCorrect(this)
    });

    const motDePassCorrect = function (saisiMotDePass) {
       let messages = document.querySelector('.message');
             
        //Teste de la saisie de l'utilisateur,Au moins 8 caracteres requis    
       if (saisiMotDePass.value.length < 8) {
        messages.innerHTML = "Le mot de passe doit avoir au moins  8 caracteres";
        messages.classList.add('message-visible');
        messages.style.background = 'red';
       }
       else {
        messages.innerHTML = "Le mot de passe est valide";
        messages.classList.add('message-visible');
        messages.style.background = 'green';
       } 
    };





























/////////////////////////////////////////////////////////////////////////////
//recuperation des variables
/*const mail = document.getElementById("mail")
const password = document.getElementById("mdpasse")
const form_v = document.getElementById('form')
const my_email = ('^[a-z-@.]+/');
const pass_valid = /^[a-z0-9@#-A-Z][-&$,.][a-z-@.][a-z-@.][a-z-@.]+/;

//utilisation de la fonction de validation
form.addEventListener('submit', (e) => {
const message = document.querySelector(".message");
       

//testons la validation du champ email avec l'expressions reguliere
    if (mail.value === '' ) {
        message.innerHTML = "Adresse mail est incorrecte ou vide";
        message.classListe.add('message-visible');
        message.style.background = "red";
            
    }
    if (my_email.test(mail.value)) {
        message.innerHTML = "Adresse mail valide";
        message.classListe.add('message-visible');
        message.style.background = "green";
    }
    if (password.value.length  <= 8 ) {
        message.innerHTML = "Respetez ça : " +" 8 caractères au moins "+", une majuscule" + " et un chiffre";
        message.classListe.add('message-visible');
        message.style.background = 'red';
    }
    if (password.value) {
        message.innerHTML = "Mot de passe valide";
        message.classListe.add('message-visible');
        message.style.background = 'green';
    }
    if (message.length > 0) {
            e.preventDefault()
            message.innerText = message.join(', ')
        }
});*/




