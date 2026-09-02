// ============================================================
// M7 COMMUNICATION - MAIN.JS
// Version SIMPLIFIÉE et GARANTIE
// ============================================================

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('M7 COMMUNICATION - Script démarré');

    // ---------- MENU HAMBURGER ----------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Vérifier que les éléments existent
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
        console.log('Toggle menu appelé');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Bloquer/débloquer le scroll
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('Menu OUVERT');
        } else {
            document.body.style.overflow = '';
            console.log('Menu FERMÉ');
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
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active')) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                toggleMenu();
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
