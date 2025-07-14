document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    mobileBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Fermer le menu après clic sur un lien
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('section, .timeline-item, .project-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Gestion des modals de projets
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            
            // Créer un ID de modal basé sur le titre du projet
            const modalId = projectTitle.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[éèêë]/g, 'e')
                .replace(/[àâä]/g, 'a')
                .replace(/[îï]/g, 'i')
                .replace(/[ôö]/g, 'o')
                .replace(/[ùûü]/g, 'u')
                .replace(/ç/g, 'c') + '-modal';
            
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            }
        });
    });
    
    // Fermer les modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.project-modal').style.display = 'none';
            document.body.classList.remove('modal-open');
        });
    });
    
    // Fermer modal en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-modal')) {
            e.target.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
    
    // Déclencher au chargement
    animateOnScroll();
    
    // Déclencher au scroll
    window.addEventListener('scroll', animateOnScroll);
});
// Gestion des modals de projets
document.querySelectorAll('.view-project').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        }
    });
});

// Fermer les modals
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.project-modal').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

// Fermer modal en cliquant à l'extérieur
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-modal')) {
        e.target.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});