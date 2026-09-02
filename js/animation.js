/* ============================================================
   M7 COMMUNICATION - RESPONSIVE
   Mobile-first & breakpoints
   ============================================================ */

/* ---------- MOBILES (max 768px) ---------- */
@media (max-width: 768px) {
    /* Navigation mobile */
    .hamburger {
        display: flex !important;
        flex-direction: column;
        cursor: pointer;
        gap: 5px;
        padding: 8px;
        z-index: 1001;
        background: transparent;
        border: none;
    }
    
    .hamburger .bar {
        display: block;
        width: 28px;
        height: 3px;
        background: var(--bleu-roi);
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
    }
    
    .nav-menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 320px;
        height: 100vh;
        background: var(--blanc);
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 80px 30px 30px;
        gap: 4px;
        transition: all 0.4s ease;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        z-index: 1000;
        display: flex !important;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    /* Overlay sombre derrière le menu */
    .nav-menu.active::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .nav-menu li {
        width: 100%;
    }
    
    .nav-menu li a {
        display: block;
        padding: 14px 20px;
        font-size: 1.1rem;
        font-weight: 600;
        width: 100%;
        text-align: left;
        border-radius: 8px;
        color: var(--gris-texte);
        transition: all 0.3s ease;
        border-left: 3px solid transparent;
    }
    
    .nav-menu li a:hover,
    .nav-menu li a.active {
        color: var(--bleu-clair);
        background: rgba(26, 58, 107, 0.08);
        border-left-color: var(--bleu-clair);
    }
    
    .nav-menu li a.active::after {
        display: none;
    }

    /* Ajustement du header mobile */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        border-bottom: 2px solid rgba(26, 58, 107, 0.1);
    }

    .nav-container {
        padding: 10px 16px;
        min-height: 65px;
    }

    .logo {
        font-size: 1.2rem;
    }

    .logo-m, .logo-7 {
        font-size: 1.8rem;
    }

    .logo-text {
        font-size: 0.9rem;
    }

    .logo-slogan {
        display: none;
    }

    /* Hero */
    .hero {
        min-height: auto;
        padding: 100px 0 50px;
    }
    
    .hero-title {
        font-size: 2.2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-desc {
        font-size: 0.95rem;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
    
    .hero-stats {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }
    
    .stat-item {
        padding: 14px 10px;
    }
    
    .stat-number {
        font-size: 1.5rem;
    }
    
    .stat-label {
        font-size: 0.7rem;
    }
    
    .hero-buttons {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    
    .hero-buttons .btn {
        width: 100%;
        justify-content: center;
    }

    /* Sections */
    .section-padding {
        padding: 50px 0;
    }
    
    .section-header h2 {
        font-size: 1.6rem;
    }
    
    .section-subtitle {
        font-size: 0.9rem;
    }
    
    /* Events */
    .events-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .event-image {
        height: 180px;
    }
    
    .event-content {
        padding: 20px;
    }
    
    .event-content h3 {
        font-size: 1.1rem;
    }
    
    /* Actions */
    .actions-grid {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
    
    .action-card {
        padding: 20px 16px;
    }
    
    .action-icon {
        width: 56px;
        height: 56px;
        font-size: 1.5rem;
    }
    
    .action-card h3 {
        font-size: 1rem;
    }
    
    .action-card p {
        font-size: 0.85rem;
    }
    
    /* Testimonials */
    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .testimonial-card {
        padding: 20px;
    }
    
    /* CTA */
    .cta-section {
        padding: 50px 0;
    }
    
    .cta-content h2 {
        font-size: 1.6rem;
    }
    
    .cta-content p {
        font-size: 0.95rem;
    }
    
    .btn-lg {
        padding: 14px 28px;
        font-size: 0.95rem;
    }
    
    /* Footer */
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        padding-bottom: 30px;
    }
    
    .footer {
        padding: 40px 0 20px;
    }
    
    .footer-logo {
        font-size: 1.3rem;
    }
    
    .footer-desc {
        font-size: 0.9rem;
    }
    
    .footer-col h4 {
        font-size: 1rem;
    }
}

/* ---------- TRÈS PETITS MOBILES (max 480px) ---------- */
@media (max-width: 480px) {
    .container {
        padding: 0 16px;
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .hero-stats {
        grid-template-columns: 1fr 1fr;
    }
    
    .actions-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-item {
        padding: 12px 8px;
    }
    
    .stat-number {
        font-size: 1.3rem;
    }
    
    .btn {
        padding: 12px 20px;
        font-size: 0.85rem;
    }
    
    .event-features {
        flex-direction: column;
        gap: 6px;
    }
    
    .footer-social a {
        width: 36px;
        height: 36px;
        font-size: 0.85rem;
    }

    .nav-menu {
        width: 85%;
        padding: 70px 20px 20px;
    }
}
