document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = localStorage.getItem('carouselCounter') || 0;
    const slideWidth = carouselImages[0].clientWidth; // Largura de uma imagem

    // Atualiza a posição inicial do carrossel com base no contador
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

    // Adiciona evento de clique no botão Próximo
    nextBtn.addEventListener('click', () => {
        if (counter < carouselImages.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
        updateCarousel();
    });

    // Adiciona evento de clique no botão Anterior
    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
        } else {
            counter = carouselImages.length - 1;
        }
        updateCarousel();
    });

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

        // Salva o contador atual no localStorage
        localStorage.setItem('carouselCounter', counter.toString());
    }
});
