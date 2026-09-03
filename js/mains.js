// ============================================================
// M7 COMMUNICATION - MAIN.JS
// Menu latéral DROIT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('M7 COMMUNICATION - Script démarré');

    // ---------- MENU HAMBURGER ----------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Vérification
    if (!hamburger) {
        console.error('ERREUR: .hamburger non trouvé');
        return;
    }
    if (!navMenu) {
        console.error('ERREUR: .nav-menu non trouvé');
        return;
    }

    console.log('Menu trouvé - OK');

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        console.log('Toggle menu');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('Menu OUVERT (droite)');
        } else {
            document.body.style.overflow = '';
            console.log('Menu FERMÉ');
        }
    }

    // Fermer le menu
    function closeMenu() {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Menu FERMÉ (via clic externe)');
        }
    }

    // Événement au clic sur le hamburger
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Fermer le menu quand on clique en dehors (dans le vide)
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active')) {
            // Si le clic n'est pas sur le menu ni sur le hamburger
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // ---------- LIEN ACTIF ----------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
