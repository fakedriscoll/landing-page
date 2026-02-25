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
            document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
                            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const assuntoSelect = document.getElementById('assunto');
            const assuntoTexto = assuntoSelect.options[assuntoSelect.selectedIndex].text;
            const assuntoValor = assuntoSelect.value;
            const mensagem = document.getElementById('mensagem').value;
                            
            // Define o número do WhatsApp com base no assunto
            // LGPD e Criminal -> (11) 97027-9082
            // Demais -> (11) 91111-1140
            let numeroWhats = "5511911111140"; 
                            
            if (assuntoValor === "lgpd" || assuntoValor === "criminal" || assuntoValor === "penal") {
                numeroWhats = "5511970279082";
            }
                            
            const texto = `Olá, gostaria de agendar uma consulta.%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${telefone}%0A*Assunto:* ${assuntoTexto}%0A*Mensagem:* ${mensagem}`;
                            
            const url = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${texto}`;
                            
                window.open(url, '_blank');
            });
