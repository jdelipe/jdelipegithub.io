const mybtn = document.getElementById('mybtn');
const box = document.getElementById('box');
const fireworksContainer = document.getElementById('fireworks-container');

mybtn.onclick = function () {
    // Remover conteúdo anterior
    box.innerHTML = '';

    // Criar o coração
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Criar o texto dentro do coração
    const heartText = document.createElement('div');
    heartText.classList.add('heart-text');
    heartText.textContent = 'Quer sair comigo?';

    // Adicionar texto ao coração
    heart.appendChild(heartText);

    // Adicionar o coração à caixa
    box.appendChild(heart);

    // Criar o contêiner dos botões
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '10px';
    buttonsContainer.style.marginTop = '20px';

    // Criar o botão "Sim"
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Sim';
    yesButton.classList.add('option-btn');
    yesButton.onclick = function () {
        // Substituir a frase dentro do coração por "nerd"
        heartText.textContent = 'Já era Horaaaa!!!';
        // Mostrar fogos de artifício
        showFireworks();
    };

    // Criar o botão "Não"
    const noButton = document.createElement('button');
    noButton.textContent = 'Não';
    noButton.classList.add('option-btn');
    noButton.onclick = function () {
        // Mover o botão "Não" para uma posição aleatória perto do coração
        const heartRect = heart.getBoundingClientRect();
        const maxOffset = 100; // Máximo deslocamento em pixels

        const randomTop = heartRect.top + (Math.random() * maxOffset * 2) - maxOffset;
        const randomLeft = heartRect.left + (Math.random() * maxOffset * 2) - maxOffset;

        noButton.style.position = 'absolute';
        noButton.style.top = randomTop + 'px';
        noButton.style.left = randomLeft + 'px';
    };

    // Adicionar os botões ao contêiner
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);

    // Adicionar o contêiner dos botões à caixa
    box.appendChild(buttonsContainer);
};

function showFireworks() {
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        fireworksContainer.appendChild(firework);

        // Remover a animação após o término
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}
