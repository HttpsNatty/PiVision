// Função para desenhar o círculo trigonométrico
function desenharCirculo() {
    const canvas = document.getElementById('circulo');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Limpar canvas antes de desenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar o círculo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 20, 0, 2 * Math.PI);
    ctx.stroke();

    // Desenhar os eixos
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();

    // Desenhar marcações dos principais ângulos no círculo
    desenharMarcacoes(ctx, centerX, centerY, radius);
}

// Função para desenhar as marcações principais do círculo trigonométrico
function desenharMarcacoes(ctx, centerX, centerY, radius) {
    const angulos = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

    ctx.fillStyle = 'black'; // Cor para marcações padrão
    angulos.forEach(angulo => {
        const radianos = grausParaRadianos(angulo);
        const x = centerX + Math.cos(radianos) * (radius - 20);
        const y = centerY - Math.sin(radianos) * (radius - 20); // Y é invertido no canvas
        
        // Desenhar o ponto no círculo
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();

        // Desenhar o ângulo ao redor do ponto
        ctx.fillText(`${angulo}°`, x + 5, y - 5);
    });
}

// Função para desenhar um ângulo específico no círculo
function desenharAngulo(angulo) {
    const canvas = document.getElementById('circulo');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const radianos = grausParaRadianos(angulo);
    const x = centerX + Math.cos(radianos) * (radius - 20);
    const y = centerY - Math.sin(radianos) * (radius - 20);

    // Desenhar o ponto do ângulo no círculo
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red'; // Cor para destacar o ângulo atual
    ctx.fill();
}

// Função para converter graus em radianos (valor numérico)
function grausParaRadianos(graus) {
    return graus * (Math.PI / 180);
}

// Função para converter radianos para graus
function radianosParaGraus(radianos) {
    return radianos * (180 / Math.PI);
}

// Função para inserir o símbolo π no campo de entrada
function inserirPi() {
    const piInput = document.getElementById('piInput');
    piInput.value += 'π'; // Adiciona o símbolo de pi ao campo
}

// Função principal de conversão chamada ao clicar no botão
function converter() {
    const graus = document.getElementById('graus').value;

    if (!graus || graus == 0) {
        document.getElementById('resultado').textContent = "Por favor, insira um valor válido.";
        return;
    }

    const radianos = grausParaRadianos(graus);
    document.getElementById('resultado').textContent = 
        `${graus} graus é equivalente a ${radianos.toFixed(4)} radianos.`;

    // Desenhar o círculo e depois o ângulo no círculo
    desenharCirculo();  // Limpar e redesenhar o círculo com as marcações padrão
    desenharAngulo(graus);  // Marcar o novo ângulo no círculo
}

function converterPiParaGraus() {
    const piInput = document.getElementById('piInput').value;

    if (!piInput) {
        document.getElementById('resultadoPi').textContent = "Por favor, insira um valor em formato π/n.";
        return;
    }

    const fracaoPi = piInput.replace('π', '').trim();
    let numerador, denominador;
    if (fracaoPi.includes('/')) {
        [numerador, denominador] = fracaoPi.split('/').map(Number);
    } else {
        numerador = Number(fracaoPi) || 1;
        denominador = 1;
    }

    const graus = (numerador / denominador) * 180;
    document.getElementById('resultadoPi').textContent = `${piInput} é equivalente a ${graus.toFixed(2)} graus.`;

    // Desenhar o círculo e depois o ângulo no círculo
    desenharCirculo();  // Limpar e redesenhar o círculo com as marcações padrão
    desenharAngulo(graus);  // Marcar o novo ângulo no círculo
}

// Função para limpar os campos de entrada e o círculo
function limpar() {
    document.getElementById('graus').value = '';
    document.getElementById('piInput').value = '';

    document.getElementById('resultado').textContent = '';
    document.getElementById('resultadoPi').textContent = '';

    // Limpar o círculo chamando a função de desenhar
    desenharCirculo();
}

function openTab(evt, tabName) {
    // Esconde todos os conteúdos das abas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todas as abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona uma classe "active" ao botão que abriu a aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Inicializar o círculo ao carregar a página
window.onload = function() {
    desenharCirculo();
    openTab(event, 'grausTab'); // Abre a aba de graus por padrão
};

// Função para converter e desenhar o número complexo
function converterComplexo() {
    const inputElement = document.getElementById('complexInput');
    const input = inputElement.value;

    if (!input) {
        document.getElementById('resultadoPolar').textContent = "Por favor, insira um número complexo válido.";
        return;
    }

    // Chamar a função para desenhar o gráfico do número complexo
    desenharGraficoComplexo(input);
}

// Função para desenhar o gráfico do número complexo
function desenharGraficoComplexo(input) {
    const canvas = document.getElementById('graficoComplexo');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar os eixos
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();

    // Rótulos dos eixos
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Imaginário (i)", centerX + 5, 15); // Eixo Y
    ctx.fillText("Real", canvas.width - 50, centerY - 5); // Eixo X

    // Adicionando marcações nos eixos
    for (let i = -canvas.width / 2; i <= canvas.width / 2; i += 20) {
        ctx.beginPath();
        ctx.moveTo(centerX + i, centerY - 5);
        ctx.lineTo(centerX + i, centerY + 5); // Marca no eixo X
        ctx.moveTo(centerX - 5, centerY + i);
        ctx.lineTo(centerX + 5, centerY + i); // Marca no eixo Y
        ctx.stroke();
    }

    // Analisar a entrada do número complexo
    const complexNumber = parseComplex(input);

    if (complexNumber) {
        const { real, imaginary, magnitude, angle } = complexNumber;

        // Desenhar o número complexo no gráfico
        const x = centerX + real * 10; // Multiplicador para melhor visualização
        const y = centerY - imaginary * 10; // Y é invertido no canvas

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();

        // Exibir a forma polar
        const resultadoPolar = document.getElementById('resultadoPolar');
        const angleDegrees = radianosParaGraus(angle).toFixed(2); // Converter o ângulo para graus
        const piFraction = toPiFraction(angleDegrees); // Converter ângulo para fração de π
        resultadoPolar.textContent = `Forma Polar: |z| = ${magnitude.toFixed(2)}, θ = ${piFraction}`;
    } else {
        const resultadoPolar = document.getElementById('resultadoPolar');
        resultadoPolar.textContent = "Formato inválido. Use a forma 'a + bi'.";
    }
}

// Função para analisar a entrada do número complexo
function parseComplex(input) {
    // RegEx para capturar a parte real e imaginária
    const regex = /^([-+]?\d*\.?\d*)?\s*([-+]\s*\d*\.?\d*)?i$/;
    const match = input.match(regex);

    if (!match) return null;

    const real = parseFloat(match[1]) || 0; // Parte real
    const imaginary = parseFloat(match[2].replace(/\s/g, '')) || 0; // Parte imaginária
    const magnitude = Math.sqrt(real ** 2 + imaginary ** 2);
    const angle = Math.atan2(imaginary, real); // Ângulo em radianos

    return { real, imaginary, magnitude, angle };
}

// Função para converter o ângulo em graus para fração de π
function toPiFraction(angleDegrees) {
    const piValue = Math.PI;
    const fractions = [
        { value: 0, fraction: '0' },
        { value: 30, fraction: 'π/6' },
        { value: 45, fraction: 'π/4' },
        { value: 60, fraction: 'π/3' },
        { value: 90, fraction: 'π/2' },
        { value: 120, fraction: '2π/3' },
        { value: 135, fraction: '3π/4' },
        { value: 150, fraction: '5π/6' },
        { value: 180, fraction: 'π' },
        { value: 210, fraction: '7π/6' },
        { value: 225, fraction: '5π/4' },
        { value: 240, fraction: '4π/3' },
        { value: 270, fraction: '3π/2' },
        { value: 300, fraction: '5π/3' },
        { value: 315, fraction: '7π/4' },
        { value: 330, fraction: '11π/6' },
        { value: 360, fraction: '2π' }
    ];

    const closest = fractions.reduce((prev, curr) => {
        return (Math.abs(curr.value - angleDegrees) < Math.abs(prev.value - angleDegrees) ? curr : prev);
    });

    return closest.fraction;
}