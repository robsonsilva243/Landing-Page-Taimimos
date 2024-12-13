// Função para enviar mensagem
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Cria um objeto com os dados do formulário
    var data = {
        name: name,
        email: email,
        message: message
    };

    // Envia os dados para o servidor
    fetch('https://seu-endpoint-de-servidor.com/api/enviar-mensagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            // Limpa o formulário
            document.getElementById('contactForm').reset();
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
});

// Adiciona um evento de rolagem suave ao usar a roda do mouse
window.addEventListener('wheel', function(event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    
    if (delta > 0) {
        // Rolando para baixo
        scrollToSection(currentSectionIndex + 1);
    } else {
        // Rolando para cima
        scrollToSection(currentSectionIndex - 1);
    }
}, { passive: false });


// Adiciona um evento de rolagem suave ao usar a roda do mouse
window.addEventListener('wheel', function(event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const target = document.querySelector(delta > 0 ? 'section:target + section' : 'section:target');

    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}, { passive: false });

// Função para mostrar e ocultar os cards
var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.1)';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
// Função para criar as bolinhas amarelas no fundo
var body = document.body;
for (var i = 0; i < 100; i++) {
    var bola = document.createElement('div');
    bola.style.position = 'absolute';
    bola.style.top = Math.random() * window.innerHeight + 'px';
    bola.style.left = Math.random() * window.innerWidth + 'px';
    bola.style.width = '20px';
    bola.style.height = '20px';
    bola.style.borderRadius = '50%';
    bola.style.background = 'yellow';
    bola.style.zIndex = '-1';
    body.appendChild(bola);
}

// Função para mudar a cor de fundo ao passar o mouse sobre um elemento
const elemento = document.querySelector('.meuElemento');
elemento.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
elemento.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Adiciona um efeito de transição ao formulário de contato
const contactForm = document.getElementById('contactForm');
contactForm.style.transition = 'opacity 0.5s';
contactForm.style.opacity = '0';
setTimeout(() => {
    contactForm.style.opacity = '1';
}, 100); // Atraso para a transição aparecer