/*
* Formül Nakliyat - Ana JavaScript Dosyası
* Oluşturulma Tarihi: 2025
*/

$(document).ready(function() {
    // Mobil Menü Kontrolü
    $('.menu-toggle').click(function() {
        $('.mobile-menu-content').slideToggle();
    });

    // Ana Slider Kontrolü
    let currentSlide = 0;
    const slides = $('.slider-item');
    const dots = $('.slider-dot');
    const totalSlides = slides.length;

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        $(slides[index]).addClass('active');
        $(dots[index]).addClass('active');
        currentSlide = index;
    }

    dots.click(function() {
        const slideIndex = $(this).data('slide');
        showSlide(slideIndex);
        resetTimer();
    });

    $('.slider-next').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
        resetTimer();
    });

    $('.slider-prev').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
        resetTimer();
    });

    let slideTimer = setInterval(autoSlide, 5000);

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(autoSlide, 5000);
    }

    // Arama İkonu Kontrolü
    $('.search-icon').click(function() {
        alert('Arama özelliği yakında eklenecek!');
    });

    // Footer Bülten Aboneliği
    $('.footer-newsletter').submit(function(e) {
        e.preventDefault();
        alert('E-posta bültenimize başarıyla kaydoldunuz.');
        this.reset();
    });

    // Sayfa Kaydırma Animasyonu
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });

    // Sayfa Yüklendiğinde Animasyon
    $(window).on('load', function() {
        $('.section-title, .about-content, .service-card, .stat-item, .area-card, .blog-card, .quote-form').each(function() {
            $(this).addClass('animated fadeInUp');
        });
    });

    // Scroll Olayı
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        
        if (scrollTop > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
        
        $('.animated').each(function() {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).height();
            const windowHeight = $(window).height();
            
            if (scrollTop > elementTop - windowHeight + elementHeight / 2) {
                $(this).addClass('fadeInUp');
            }
        });
    });

    // Responsive Kontrol
    function checkResponsive() {
        if ($(window).width() <= 991) {
            $('.header').hide();
            $('.mobile-menu').show();
        } else {
            $('.header').show();
            $('.mobile-menu').hide();
            $('.mobile-menu-content').hide();
        }
    }

    checkResponsive();
    $(window).resize(function() {
        checkResponsive();
    });

    // ✅ Form Gönderimi - Backend'e Bağlantı
    $('#quoteForm').on('submit', async function(e) {
        e.preventDefault();

        const formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            message: $('#message').val(),
        };

        try {
            const response = await fetch("https://formul-backend.onrender.com/send-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Form başarıyla gönderildi!");
                this.reset();
            } else {
                alert("Form gönderilemedi. Lütfen tekrar deneyin.");
            }
        } catch (error) {
            alert("Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.");
            console.error("Form error:", error);
        }
    });
});
