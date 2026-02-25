        // Handle scroll for header background
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll to sections
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('Obrigado! Sua solicitação foi recebida. Entraremos em contato em breve.');
            event.target.reset();
        }
