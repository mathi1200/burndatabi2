document.addEventListener('DOMContentLoaded', function () {
    // Adiciona centralização de cada seção ao rolar
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.scrollSnapAlign = 'center';
    });

    // Adiciona smooth scroll com pontos de ancoragem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'  // Garante que a seção seja centralizada na tela
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dataPanel = document.getElementById('dataPanel');
    const expandedImage = document.getElementById('expandedImage');
    console.log("clique realizada");
    dataPanel.addEventListener('click', function () {
        dataPanel.classList.toggle('expanded');
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden'; // Alternar overflow
    });
});
