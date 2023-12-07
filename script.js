    document.addEventListener('DOMContentLoaded', function () {
        // Add smooth scroll with snap points
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetElement = document.querySelector(this.getAttribute('href'));

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'  // Ensure alignment to the start of the target
                    });
                }
            });
        });
    });
