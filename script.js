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
const CACHE_NAME = 'your-cache-name';
const urlsToCache = ['array', 'of', 'your', 'cached', 'urls'];
let deferredPrompt;



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
    // ...
    // Lida com a resposta da solicitação
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            // O usuário aceitou a instalação
            console.log('O usuário aceitou a instalação');

            // Atualize o cache ou faça outras ações necessárias após a instalação
            updateCache();
        } else {
            console.log('O usuário recusou a instalação');
        }

        // Limpa a referência à solicitação
        deferredPrompt = null;

        // Define a flag indicando que o botão de instalação foi fechado
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
