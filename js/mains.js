// ============================================================
// M7 COMMUNICATION - MAIN.JS
// Version corrigée
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('M7 COMMUNICATION - Script chargé avec succès');

    // ---------- MENU HAMBURGER ----------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Vérification que les éléments existent
    if (hamburger && navMenu) {
        console.log('Menu hamburger trouvé');

        // Ouvrir/Fermer le menu au clic
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Hamburger cliqué');
            
            // Toggle des classes
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Bloquer le scroll quand le menu est ouvert
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fermer le menu lors du clic sur un lien
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fermer le menu en cliquant en dehors
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

    } else {
        console.error('Hamburger ou nav-menu introuvable');
        console.log('hamburger:', hamburger);
        console.log('navMenu:', navMenu);
    }

    // ---------- LIEN ACTIF SUR LA PAGE COURANTE ----------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Page actuelle:', currentPage);

    navLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ---------- SCROLL DOUX ----------
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ---------- HEADER OMBRE AU SCROLL ----------
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (header) {
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.12)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
            }
        }
        lastScroll = currentScroll;
    });
});
