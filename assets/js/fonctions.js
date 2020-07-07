/**
 * Fonctions de travail
 */
    const form = document.querySelector('form');

    //Suivre les modifications de l'e-mail
    form.email.addEventListener('action', function () {
            emailcorrect(this)
        });
    //Suivre les modifications du mot de passe
    form.pass.addEventListener('action',
        
        function () {
            motDePassCorrect(this)
    });