// ============================================================
// M7 COMMUNICATION - ANIMATIONS.JS
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // ---------- FADE-IN AU SCROLL ----------
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    }

    // ---------- COMPTEUR DES STATS (optionnel) ----------
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const observerStats = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.textContent);
                    if (!isNaN(target)) {
                        animateCounter(el, target);
                    }
                    observerStats.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => observerStats.observe(el));
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = Math.ceil(target / 40);
        const duration = 1500;
        const stepTime = Math.floor(duration / 40);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = current + '+';
            }
        }, stepTime);
    }
});
