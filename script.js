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

// fim do scroll script

// pwa
// Verifique se o botão de instalação foi fechado
if (!sessionStorage.getItem('installPromptClosed')) {
    // Adicione o evento para detectar a disponibilidade do prompt de instalação
    window.addEventListener('beforeinstallprompt', function (event) {
        // Armazena a referência da solicitação para uso posterior
        deferredPrompt = event;

        // Exibe o prompt de instalação
        displayInstallPrompt();
    });
}

// Função para exibir o prompt de instalação
function displayInstallPrompt() {
    // Verifica se o usuário não está usando o aplicativo já
    if (!document.querySelector('.pwa-install-prompt')) {
        const installPrompt = document.createElement('div');
        installPrompt.className = 'pwa-install-prompt';
        installPrompt.innerHTML = `
            <p>Instale nosso aplicativo para uma melhor experiência!</p>
            <button class="install-btn" onclick="installPWA()">Instalar Agora</button>
            <button class="close-btn" onclick="closeInstallPrompt()">Fechar</button>
        `;
        document.body.appendChild(installPrompt);
    }
}

// Função para instalar o PWA
function installPWA() {
    console.log("Clicou para instalar PWA");
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
        console.log("Escolha do usuário:", choiceResult);

        if (choiceResult.outcome === 'accepted') {
            console.log('O usuário aceitou a instalação');
            updateCache();
        } else {
            console.log('O usuário recusou a instalação');
        }

        deferredPrompt = null;
        sessionStorage.setItem('installPromptClosed', 'true');
    });
}


// Função para fechar o prompt de instalação
function closeInstallPrompt() {
    const installPrompt = document.querySelector('.pwa-install-prompt');
    if (installPrompt) {
        installPrompt.style.display = 'none';
    }

    // Define a flag indicando que o botão de instalação foi fechado
    sessionStorage.setItem('installPromptClosed', 'true');
}

// Função para atualizar o cache (substitua com sua lógica de cache)
function updateCache() {
    // ...
}

//fim pwa
