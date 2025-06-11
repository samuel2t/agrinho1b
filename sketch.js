let carroX;

function setup() {
  createCanvas(800, 400);
  carroX = -100; // Começa fora da tela, à esquerda
}

function draw() {
  background(220);

  // Desenha o cenário
  desenharCampo();
  desenharCidade();

  // Atualiza e desenha o carro
  moverCarro();
  desenharCarro(carroX, height - 60);
}

function desenharCampo() {
  // Céu
  background(135, 206, 235);

  // Grama
  fill(100, 200, 100);
  rect(0, height - 100, width / 2, 100);

  // Árvores
  for (let i = 50; i < width / 2; i += 100) {
    fill(101, 67, 33); // tronco
    rect(i, height - 130, 10, 30);
    fill(34, 139, 34); // copa
    ellipse(i + 5, height - 140, 40, 40);
  }
}

function desenharCidade() {
  // Rua e calçada
  fill(60);
  rect(width / 2, height - 100, width / 2, 100);

  // Casas
  for (let i = width / 2 + 20; i < width - 100; i += 100) {
    fill(255, 204, 153); // parede
    rect(i, height - 130, 60, 40);
    fill(150, 75, 0); // telhado
    triangle(i - 10, height - 130, i + 30, height - 160, i + 70, height - 130);
  }

  // Prédios
  for (let i = width / 2 + 60; i < width; i += 120) {
    fill(100);
    let h = random(80, 150);
    rect(i, height - h - 100, 40, h);
  }
}

function moverCarro() {
  if (carroX < width) {
    carroX += 2; // velocidade
  }
}

function desenharCarro(x, y) {
  // Corpo do carro
  fill(255, 0, 0);
  rect(x, y - 20, 60, 20);
  fill(200, 0, 0);
  rect(x + 10, y - 35, 40, 15); // teto

  // Rodas
  fill(0);
  ellipse(x + 10, y, 15);
  ellipse(x + 50, y, 15);
}



