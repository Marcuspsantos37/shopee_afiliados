document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carrossel_itens');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideIndex = 0;
    let intervalId; // Para armazenar o ID do intervalo
  
    // Função para avançar ou retroceder os slides
    function showSlides(n) {
      slideIndex += n;
      const items = carouselItems.querySelectorAll('img');
      
      if (slideIndex > items.length - 1) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = items.length - 1;
      }
  
      carouselItems.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  
    // Função para iniciar a transição automática dos slides
    function startCarousel() {
      intervalId = setInterval(() => {
        showSlides(1); // Avança para o próximo slide a cada intervalo
      }, 3000); // Intervalo de 3 segundos (3000 milissegundos)
    }
  
    // Event listeners para os botões
    prevButton.addEventListener('click', () => {
      clearInterval(intervalId); // Limpa o intervalo quando o usuário interage
      showSlides(-1);
      startCarousel(); // Reinicia a transição automática
    });
  
    nextButton.addEventListener('click', () => {
      clearInterval(intervalId);
      showSlides(1);
      startCarousel();
    });
  
    // Iniciar a transição automática quando a página carregar
    startCarousel();
  });
  
