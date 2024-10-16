# PiVision

**PiVision** é uma aplicação interativa para visualizar conceitos matemáticos e trabalhar com números complexos, círculos trigonométricos, graus e radianos. O projeto foi desenvolvido para ajudar a visualizar conversões de graus para radianos, e vice-versa, além de realizar representações gráficas de números complexos em sua forma polar.

## Funcionalidades

- **Conversão de Graus para Radianos**: Insira valores em graus ou frações de π para obter a equivalência em radianos.
- **Representação no Círculo Trigonométrico**: Visualize os ângulos inseridos diretamente no círculo trigonométrico.
- **Conversão e Visualização de Números Complexos**: Insira números complexos na forma `a + bi` e veja a representação gráfica, além da conversão para a forma polar.
- **Interface Interativa**: Uma interface com abas que permite alternar entre as funcionalidades de graus/radianos e números complexos.

## Como Usar

1. **Página Inicial**:
    - O círculo trigonométrico é desenhado automaticamente, mostrando ângulos principais.
    - Insira um valor em graus para ver sua conversão para radianos.
    - Insira uma fração de π para obter a conversão correspondente em graus.

2. **Números Complexos**:
    - Vá para a aba "Números Complexos".
    - Insira um número complexo na forma `a + bi` (ex: `2 + 3i` ou `-1 + i`).
    - A aplicação irá calcular a forma polar do número e exibir sua representação no gráfico.

## Estrutura do Projeto

- **index.html**: Página principal com a interface do usuário.
- **app.js**: Lógica principal do aplicativo, incluindo as conversões e desenhos dos gráficos.
- **style.css**: Estilos para o layout da aplicação, incluindo o banner e o design responsivo.
  
## Tecnologias Utilizadas

- **HTML5**: Estrutura da interface.
- **CSS3**: Estilos e layout.
- **JavaScript**: Lógica de conversão, cálculo e desenhos no canvas.
- **Canvas API**: Desenho do círculo trigonométrico e gráficos complexos.