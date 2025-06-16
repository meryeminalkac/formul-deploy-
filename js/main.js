/**
 * Formül Nakliyat - Ana JavaScript Dosyası
 * Güncellenme Tarihi: 2024
 */

$(document).ready(function() {
    // ======================
    // GENEL SAYFA AYARLARI
    // ======================
    
    // Mobil Menü Toggle
    $('.menu-toggle').click(function() {
        $('.mobile-menu-content').slideToggle();
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
    $(window).resize(checkResponsive);

    // ======================
    // SLIDER FONKSİYONLARI
    // ======================
    
    let currentSlide = 0;
    const slides = $('.slider-item');
    const dots = $('.slider-dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        slides.eq(index).addClass('active');
        dots.eq(index).addClass('active');
        currentSlide = index;
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    let slideTimer = setInterval(autoSlide, 5000);

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(autoSlide, 5000);
    }

    dots.click(function() {
        showSlide($(this).data('slide'));
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

    // ======================
    // DİĞER ETKİLEŞİMLER
    // ======================
    
    // Arama İkonu
    $('.search-icon').click(function() {
        alert('Arama özelliği yakında eklenecek!');
    });

    // Footer Bülten Formu
    $('.footer-newsletter').submit(function(e) {
        e.preventDefault();
        alert('E-posta bültenimize başarıyla kaydoldunuz.');
        this.reset();
    });

    // Sayfa İçi Linkler
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });

    // Animasyonlar
    $(window).on('load', function() {
        $('.section-title, .about-content, .service-card, .stat-item, .area-card, .blog-card, .quote-form').each(function() {
            $(this).addClass('animated fadeInUp');
        });
    });

    // Scroll Animasyonları
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        
        $('.header').toggleClass('fixed', scrollTop > 100);
        
        $('.animated').each(function() {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).outerHeight();
            if (scrollTop > elementTop - $(window).height() + elementHeight/2) {
                $(this).addClass('fadeInUp');
            }
        });
    });

    // ======================
    // TEKLİF FORM İŞLEMLERİ
    // ======================
    
    $('#quoteForm').on('submit', async function(e) {
        e.preventDefault();
        
        // Form elemanlarını seç
        const $form = $(this);
        const $submitBtn = $form.find('[type="submit"]');
        const $inputs = $form.find('input, textarea');
        
        // Yükleme durumu
        $submitBtn.prop('disabled', true).text('Gönderiliyor...');
        
        try {
            // Form verilerini hazırla
            const formData = {
                name: $('#name').val().trim(),
                phone: $('#phone').val().trim(),
                email: $('#email').val().trim(),
                message: $('#message').val().trim()
            };
            
            // Zorunlu alan kontrolü
            const requiredFields = ['name', 'email', 'message'];
            const emptyFields = requiredFields.filter(field => !formData[field]);
            
            if (emptyFields.length) {
                throw new Error(`Lütfen şu alanları doldurun: ${emptyFields.join(', ')}`);
            }
            
            // API isteği gönder
            const response = await fetch("https://formul-backend.onrender.com/send-form",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            
            // Yanıtı işle
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Form gönderilemedi');
            }
            
            // Başarılı yanıt
            const result = await response.json();
            alert(result.message || "Teşekkürler! Formunuz başarıyla gönderildi.");
            $form[0].reset();
            
        } catch (error) {
            console.error('Form gönderim hatası:', error);
            alert(`Hata: ${error.message || 'Bir hata oluştu, lütfen tekrar deneyin'}`);
        } finally {
            // Butonu eski haline getir
            $submitBtn.prop('disabled', false).text('Gönder');
        }
    });
});