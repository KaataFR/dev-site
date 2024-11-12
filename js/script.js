/* HEADER NAV */

document.querySelector('.open_nav').addEventListener('click', function() {
    // 1. Ajoute la classe 'open' à #header-nav
    document.getElementById('header-nav').classList.add('open');
    
    // 2. Applique 'display: none' à .open_nav
    document.querySelector('.open_nav').style.display = 'none';
    
    // 3. Applique 'display: block' à .close_nav
    document.querySelector('.close_nav').style.display = 'block';
    document.querySelector('header').style.marginBottom = 'calc(11vw + 11vh)';

});


document.querySelector('.close_nav').addEventListener('click', function() {
    // Retire la classe 'open' de #header-nav
    document.getElementById('header-nav').classList.remove('open');
    
    // Réapplique 'display: block' à .open_nav
    document.querySelector('.open_nav').style.display = 'block';
    
    // Applique 'display: none' à .close_nav
    document.querySelector('.close_nav').style.display = 'none';
    document.querySelector('header').style.marginBottom = '0px';

});



/* FORMULAIRE CONTACT */ 

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const templateParams = {
            lastName: document.getElementById("lastName").value,
            firstName: document.getElementById("firstName").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log(templateParams)

        // Envoyer l'email avec EmailJS
        emailjs.send("service_xyqzwac","template_c1hsgra", templateParams)
            .then(function(response) {
                console.log("Email envoyé avec succès!", response.status, response.text);
                window.location.href = "./confirmation.html"; // Redirection vers la page de confirmation
            }, function(error) {
                console.error("Échec de l'envoi de l'email : ", error);
                alert("Une erreur est survenue. Veuillez réessayer.");
            });
    });





/* LOADING SPINNER */

    window.addEventListener("load", () => {
        const spinner = document.getElementById("loading-spinner");

        // Mesurer le temps de latence (temps de chargement de la page)
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

        // Calculer la vitesse de l'animation en fonction de la latence (plus la latence est élevée, plus la vitesse est lente)
        const speed = Math.min(5, loadTime / 500); // Limiter la vitesse pour éviter des valeurs trop lentes

        // Appliquer la nouvelle vitesse à l'animation
        spinner.style.animationDuration = `${speed}s`;
    });
