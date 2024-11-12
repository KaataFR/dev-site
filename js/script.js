/* HEADER NAV */

document.querySelector('.open_nav').addEventListener('click', function() {
    document.getElementById('header-nav').classList.add('open');
    
    document.querySelector('.open_nav').style.display = 'none';
    
    document.querySelector('.close_nav').style.display = 'block';
    document.querySelector('header').style.marginBottom = 'calc(11vw + 11vh)';

});


document.querySelector('.close_nav').addEventListener('click', function() {
    document.getElementById('header-nav').classList.remove('open');
    
    document.querySelector('.open_nav').style.display = 'block';
    
    document.querySelector('.close_nav').style.display = 'none';
    document.querySelector('header').style.marginBottom = '0px';

});



/* FORMULAIRE CONTACT */ 

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const templateParams = {
            lastName: document.getElementById("lastName").value,
            firstName: document.getElementById("firstName").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log(templateParams)

        emailjs.send("service_xyqzwac","template_c1hsgra", templateParams)
            .then(function(response) {
                console.log("Email envoyé avec succès!", response.status, response.text);
                window.location.href = "./confirmation.html"; 
            }, function(error) {
                console.error("Échec de l'envoi de l'email : ", error);
                alert("Une erreur est survenue. Veuillez réessayer.");
            });
    });

