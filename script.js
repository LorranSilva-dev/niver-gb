function showMessageForm() {
    const messageForm = document.getElementById('messageForm');
    messageForm.style.display = 'block';
  }
// Abrir a carta ao clicar no botão
document.querySelector('.open-letter-button').addEventListener('click', function() {
  document.querySelector('.letter-popup').classList.add('active');
});

// Fechar a carta ao clicar no botão
document.querySelector('.close-letter-button').addEventListener('click', function() {
  document.querySelector('.letter-popup').classList.remove('active');
});

  window.addEventListener("scroll", function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});

const phrases = [
  "22/11/2024 dia dessa mulher maravilhosa que você é!",
  "Não tem palavras que possam explicar o quanto amo você.",
  "Grato a cada dia por ter alguém tão incrivel como você."
];
let phraseIndex = 0;

function changePhrase() {
  document.querySelector('.declaration-content p').textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 8000); // Troca a cada 3 segundos

// Carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-item');
const totalImages = images.length;

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImages = document.querySelector('.carousel-images');

// Função para atualizar o carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // Cada imagem ocupa 100% da largura
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Função para avançar a imagem
nextButton.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Voltar para a primeira imagem
  }
  updateCarousel();
});

// Função para retroceder a imagem
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Voltar para a última imagem
  }
  updateCarousel();
});

// Inicializar o carrossel
updateCarousel();


