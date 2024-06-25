



setTimeout(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper button");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    let cardPerView = 3;

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }

    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);



    function toggleContent(buttonId, contentId, pointsId, setaId) {
        var pontos = document.getElementById(pointsId);
        var maisTexto = document.getElementById(contentId);
        var btnLeiaMais = document.getElementById(buttonId);
        var seta = document.getElementById(setaId);
        
        if (pontos.style.display === "none") {
            pontos.style.display = "inline";
            maisTexto.style.display = "none";
            btnLeiaMais.innerHTML = btnLeiaMais.innerHTML.replace("Leia Menos", "Leia Mais");
            seta.classList.remove('rotated');
        } else {
            pontos.style.display = "none";
            maisTexto.style.display = "block";
            btnLeiaMais.innerHTML = btnLeiaMais.innerHTML.replace("Leia Mais", "Leia Menos");
            seta.classList.add('rotated');
        }
    }
    
    document.getElementById('btnLeiaMais').addEventListener('click', function() {
        toggleContent('btnLeiaMais', 'mais01', 'pontos', 'seta01');
    });
    
    document.getElementById('btnLeiaMais02').addEventListener('click', function() {
        toggleContent('btnLeiaMais02', 'mais02', 'pontos02', 'seta02');
    });

    document.getElementById('btnLeiaMais03').addEventListener('click', function() {
        toggleContent('btnLeiaMais03', 'mais03', 'pontos03', 'seta03');
    });
    document.getElementById('btnLeiaMais04').addEventListener('click', function() {
        toggleContent('btnLeiaMais04', 'mais04', 'pontos04', 'seta04');
    });
    document.getElementById('btnLeiaMais05').addEventListener('click', function() {
        toggleContent('btnLeiaMais05', 'mais05', 'pontos05', 'seta05');
    });

    document.getElementById('btnLeiaMais06').addEventListener('click', function() {
        toggleContent('btnLeiaMais06', 'mais06', 'pontos06', 'seta06');
    });
    document.getElementById('btnLeiaMais07').addEventListener('click', function() {
        toggleContent('btnLeiaMais07', 'mais07', 'pontos07', 'seta07');
    });
    document.getElementById('btnLeiaMais08').addEventListener('click', function() {
        toggleContent('btnLeiaMais08', 'mais08', 'pontos08', 'seta08');
    });
    document.getElementById('btnLeiaMais09').addEventListener('click', function() {
        toggleContent('btnLeiaMais09', 'mais09', 'pontos09', 'seta09');
    });
    document.getElementById('btnLeiaMais10').addEventListener('click', function() {
        toggleContent('btnLeiaMais10', 'mais10', 'pontos10', 'seta10');
    });
    document.getElementById('btnLeiaMais11').addEventListener('click', function() {
        toggleContent('btnLeiaMais11', 'mais11', 'pontos11', 'seta11');
    });
    document.getElementById('btnLeiaMais12').addEventListener('click', function() {
        toggleContent('btnLeiaMais12', 'mais12', 'pontos12', 'seta12');
    });
    document.getElementById('btnLeiaMais13').addEventListener('click', function() {
        toggleContent('btnLeiaMais13', 'mais13', 'pontos13', 'seta13');
    });
    document.getElementById('btnLeiaMais14').addEventListener('click', function() {
        toggleContent('btnLeiaMais1', 'mais14', 'pontos14', 'seta14');
    });
    document.getElementById('btnLeiaMais15').addEventListener('click', function() {
        toggleContent('btnLeiaMais15', 'mais15', 'pontos15', 'seta15');
    });
    

    let days = 0,
            hours = 17,
            minutes = 27,
            seconds = 59;

        function updateCountdown() {
            if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
                clearInterval(time);
                return;
            }

            if (seconds === 0) {
                seconds = 59;
                if (minutes === 0) {
                    minutes = 59;
                    if (hours === 0) {
                        hours = 23;
                        if (days > 0) {
                            days--;
                        }
                    } else {
                        hours--;
                    }
                } else {
                    minutes--;
                }
            } else {
                seconds--;
            }

            document.querySelector(".days").innerText = String(days).padStart(2, '0');
            document.querySelector(".hours").innerText = String(hours).padStart(2, '0');
            document.querySelector(".minutes").innerText = String(minutes).padStart(2, '0');
            document.querySelector(".seconds").innerText = String(seconds).padStart(2, '0');
        }

        let time = setInterval(updateCountdown, 1000);
    

   

 

}, 3000);