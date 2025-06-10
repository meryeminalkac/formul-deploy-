/*
* Formül Nakliyat - Dil Yönetimi JavaScript Dosyası
* Oluşturulma Tarihi: 2025
*/

// Türkçe dil verisi
const trData = {
    "nav": {
        "about": "HAKKIMIZDA",
        "services": "HİZMETLER",
        "service_areas": "HİZMET BÖLGELERİMİZ",
        "gallery": "GALERİ",
        "blog": "BLOG",
        "contact": "İLETİŞİM"
    },
    "contact": {
        "phone": "+90 537 742 06 68"
    },
    "slider": {
        "title1": "Eşya Paketleme",
        "desc1": "Eşyalarınızın güvenliği bizim için en önemli konudur. Bu nedenle hem şehir içi evden eve nakliye fiyatları hem de şehirler arası nakliyat ücretleri konusunda şeffaf bir politika izliyoruz ve her müşterimize en uygun ve rekabetçi fiyatları sunuyoruz.",
        "title2": "Şehir İçi Nakliyat",
        "desc2": "Profesyonel ekibimiz ve modern araçlarımızla şehir içi nakliyat hizmetlerimizde kaliteli ve güvenli taşımacılık sunuyoruz.",
        "title3": "Şehirler Arası Nakliyat",
        "desc3": "Türkiye'nin her noktasına güvenli ve hızlı şehirler arası nakliyat hizmeti veriyoruz.",
        "button": "DETAYLAR"
    },
    "about": {
        "title": "Hakkımızda",
        "desc": "Formül Nakliyat, 2005 yılından bu yana evden eve nakliyat, nakliye, şehirler arası nakliyat, şehir içi taşımacılık ve parça eşya taşıma nakliye hizmetleri sunan köklü ve güvenilir bir firmadır. Geniş hizmet ağımızla, bireysel ve kurumsal müşterilerimize profesyonel çözümler sağlamaktayız. Evden eve nakliyat sektöründe uzun yıllardır edindiğimiz deneyimle, her taşınma sürecini özel bir proje olarak değerlendiriyoruz. Eşyalarınızın güvenliği bizim için en önemli konudur. Bu nedenle hem şehir içi evden eve nakliye fiyatları hem de şehirler arası nakliyat ücretleri konusunda şeffaf bir politika izliyoruz ve her müşterimize en uygun ve rekabetçi fiyatları sunuyoruz."
    },
    "services": {
        "title": "HİZMETLERİMİZ",
        "service1": "Şehir İçi Nakliyat",
        "service2": "Şehirler Arası Nakliyat",
        "service3": "Eşya Paketleme",
        "service4": "Parça Eşya Taşıma",
        "service5": "Ofis Taşımacılığı",
        "service6": "Eşya Depolama",
        "details": "DETAYLAR"
    },
    "stats": {
        "item1": "PARÇA EŞYA TAŞIMA",
        "item2": "EŞYA DEPOLAMA",
        "item3": "ŞEHİR İÇİ NAKLİYAT",
        "item4": "ŞEHİRLER ARASI"
    },
    "service_areas": {
        "title": "HİZMET BÖLGELERİMİZ",
        "area1": "İstanbul Ankara Arası Nakliye",
        "area2": "İstanbul İzmir Arası Nakliye",
        "area3": "İstanbul Antalya Arası Nakliye",
        "details": "DETAYLAR"
    },
    "blog": {
        "title": "BLOG",
        "post1": "Evden Eve Nakliyatta Dikkat Edilmesi Gerekenler",
        "post2": "Eşyalarınızı Güvenle Paketlemenin Yolları",
        "post3": "Şehirler Arası Nakliyatta Profesyonel Hizmet",
        "read_more": "Devamını Oku"
    },
    "quote": {
        "title": "Teklif Formu",
        "name": "Adınız / Soyadınız",
        "phone": "Telefon numaranız",
        "email": "E-posta adresiniz",
        "message": "Açıklama",
        "button": "Teklif Al"
    },
    "footer": {
        "quick_menu": "Hızlı Menü",
        "europe_areas": "Avrupa Yakası Bölgeler",
        "asia_areas": "Anadolu Yakası Bölgeler",
        "contact_info": "İletişim Bilgileri",
        "address": "Veysel Karani Mah. Zaloğlu Rüstem Cad. Sancaktepe/ İstanbul",
        "hours": "24 Saat Aktifiz",
        "newsletter": "E-Posta Bültenimize Kaydolun",
        "newsletter_desc": "Düzenli olarak hizmetlerimiz hakkında bilgilendirici bültenler gönderiyoruz.",
        "newsletter_placeholder": "E-mail adresinizi yazın",
        "subscribe": "GÖNDER VE KAYDOL",
        "copyright": "© 2025 Formül Nakliyat. Tüm Hakları Saklıdır.",
        "privacy": "Gizlilik Politikası",
        "terms": "Kullanım Şartları"
    }
};

// İngilizce dil verisi
const enData = {
    "nav": {
        "about": "ABOUT US",
        "services": "SERVICES",
        "service_areas": "SERVICE AREAS",
        "gallery": "GALLERY",
        "blog": "BLOG",
        "contact": "CONTACT"
    },
    "contact": {
        "phone": "+90 531 696 60 36"
    },
    "slider": {
        "title1": "Item Packing",
        "desc1": "The safety of your belongings is our top priority. Therefore, we follow a transparent policy regarding both local and long-distance moving prices and offer the most suitable and competitive prices to all our customers.",
        "title2": "Local Moving",
        "desc2": "We offer quality and safe transportation services for local moving with our professional team and modern vehicles.",
        "title3": "Long Distance Moving",
        "desc3": "We provide safe and fast long-distance moving services to every point in Turkey.",
        "button": "DETAILS"
    },
    "about": {
        "title": "About Us",
        "desc": "Formül Nakliyat is a well-established and reliable company providing home-to-home moving, transportation, long-distance moving, local transportation, and partial item transportation services since 2005. With our wide service network, we provide professional solutions to our individual and corporate customers. With our years of experience in the home-to-home moving sector, we evaluate each moving process as a special project. The safety of your belongings is our top priority. Therefore, we follow a transparent policy regarding both local and long-distance moving prices and offer the most suitable and competitive prices to all our customers."
    },
    "services": {
        "title": "OUR SERVICES",
        "service1": "Local Moving",
        "service2": "Long Distance Moving",
        "service3": "Item Packing",
        "service4": "Partial Item Transportation",
        "service5": "Office Moving",
        "service6": "Item Storage",
        "details": "DETAILS"
    },
    "stats": {
        "item1": "PARTIAL ITEM TRANSPORTATION",
        "item2": "ITEM STORAGE",
        "item3": "LOCAL MOVING",
        "item4": "LONG DISTANCE"
    },
    "service_areas": {
        "title": "SERVICE AREAS",
        "area1": "Istanbul Ankara Moving",
        "area2": "Istanbul Izmir Moving",
        "area3": "Istanbul Antalya Moving",
        "details": "DETAILS"
    },
    "blog": {
        "title": "BLOG",
        "post1": "Things to Consider in Home-to-Home Moving",
        "post2": "Ways to Pack Your Belongings Safely",
        "post3": "Professional Service in Long Distance Moving",
        "read_more": "Read More"
    },
    "quote": {
        "title": "Quote Form",
        "name": "Your Name / Surname",
        "phone": "Your phone number",
        "email": "Your e-mail address",
        "message": "Description",
        "button": "Get Quote"
    },
    "footer": {
        "quick_menu": "Quick Menu",
        "europe_areas": "European Side Regions",
        "asia_areas": "Anatolian Side Regions",
        "contact_info": "Contact Information",
        "address": "Veysel Karani Mah. Zaloğlu Rüstem Cad. Sancaktepe/ İstanbul",
        "hours": "24 Hours Active",
        "newsletter": "Subscribe to Our Newsletter",
        "newsletter_desc": "We regularly send informative newsletters about our services.",
        "newsletter_placeholder": "Enter your e-mail address",
        "subscribe": "SEND AND SUBSCRIBE",
        "copyright": "© 2025 Formül Nakliyat. All Rights Reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use"
    }
};

// İtalyanca dil verisi
const itData = {
    "nav": {
        "about": "CHI SIAMO",
        "services": "SERVIZI",
        "service_areas": "ZONE DI SERVIZIO",
        "gallery": "GALLERIA",
        "blog": "BLOG",
        "contact": "CONTATTI"
    },
    "contact": {
        "phone": "+90 531 696 60 36"
    },
    "slider": {
        "title1": "Imballaggio Oggetti",
        "desc1": "La sicurezza dei vostri beni è la nostra massima priorità. Pertanto, seguiamo una politica trasparente per quanto riguarda i prezzi dei traslochi locali e a lunga distanza e offriamo i prezzi più adatti e competitivi a tutti i nostri clienti.",
        "title2": "Trasloco Locale",
        "desc2": "Offriamo servizi di trasporto sicuri e di qualità per i traslochi locali con il nostro team professionale e veicoli moderni.",
        "title3": "Trasloco a Lunga Distanza",
        "desc3": "Forniamo servizi di trasloco a lunga distanza sicuri e veloci in ogni punto della Turchia.",
        "button": "DETTAGLI"
    },
    "about": {
        "title": "Chi Siamo",
        "desc": "Formül Nakliyat è un'azienda consolidata e affidabile che fornisce servizi di trasloco da casa a casa, trasporto, trasloco a lunga distanza, trasporto locale e trasporto parziale di oggetti dal 2005. Con la nostra ampia rete di servizi, forniamo soluzioni professionali ai nostri clienti individuali e aziendali. Con i nostri anni di esperienza nel settore dei traslochi da casa a casa, valutiamo ogni processo di trasloco come un progetto speciale. La sicurezza dei vostri beni è la nostra massima priorità. Pertanto, seguiamo una politica trasparente per quanto riguarda i prezzi dei traslochi locali e a lunga distanza e offriamo i prezzi più adatti e competitivi a tutti i nostri clienti."
    },
    "services": {
        "title": "I NOSTRI SERVIZI",
        "service1": "Trasloco Locale",
        "service2": "Trasloco a Lunga Distanza",
        "service3": "Imballaggio Oggetti",
        "service4": "Trasporto Parziale di Oggetti",
        "service5": "Trasloco Uffici",
        "service6": "Deposito Oggetti",
        "details": "DETTAGLI"
    },
    "stats": {
        "item1": "TRASPORTO PARZIALE DI OGGETTI",
        "item2": "DEPOSITO OGGETTI",
        "item3": "TRASLOCO LOCALE",
        "item4": "LUNGA DISTANZA"
    },
    "service_areas": {
        "title": "ZONE DI SERVIZIO",
        "area1": "Trasloco Istanbul Ankara",
        "area2": "Trasloco Istanbul Izmir",
        "area3": "Trasloco Istanbul Antalya",
        "details": "DETTAGLI"
    },
    "blog": {
        "title": "BLOG",
        "post1": "Cose da Considerare nel Trasloco da Casa a Casa",
        "post2": "Modi per Imballare i Vostri Beni in Sicurezza",
        "post3": "Servizio Professionale nel Trasloco a Lunga Distanza",
        "read_more": "Leggi di più"
    },
    "quote": {
        "title": "Modulo Preventivo",
        "name": "Il tuo nome / cognome",
        "phone": "Il tuo numero di telefono",
        "email": "Il tuo indirizzo email",
        "message": "Descrizione",
        "button": "Richiedi Preventivo"
    },
    "footer": {
        "quick_menu": "Menu Rapido",
        "europe_areas": "Regioni Lato Europeo",
        "asia_areas": "Regioni Lato Anatolico",
        "contact_info": "Informazioni di Contatto",
        "address": "Veysel Karani Mah. Zaloğlu Rüstem Cad. Sancaktepe/ İstanbul",
        "hours": "Attivo 24 Ore",
        "newsletter": "Iscriviti alla Nostra Newsletter",
        "newsletter_desc": "Inviamo regolarmente newsletter informative sui nostri servizi.",
        "newsletter_placeholder": "Inserisci il tuo indirizzo email",
        "subscribe": "INVIA E ISCRIVITI",
        "copyright": "© 2025 Formül Nakliyat. Tutti i diritti riservati.",
        "privacy": "Politica sulla Privacy",
        "terms": "Termini di Utilizzo"
    }
};

// Almanca dil verisi
const deData = {
    "nav": {
        "about": "ÜBER UNS",
        "services": "DIENSTLEISTUNGEN",
        "service_areas": "SERVICEGEBIETE",
        "gallery": "GALERIE",
        "blog": "BLOG",
        "contact": "KONTAKT"
    },
    "contact": {
        "phone": "+90 534 926 50 64"
    },
    "slider": {
        "title1": "Verpackung von Gegenständen",
        "desc1": "Die Sicherheit Ihrer Habseligkeiten hat für uns höchste Priorität. Daher verfolgen wir eine transparente Politik in Bezug auf die Preise für lokale und Fernumzüge und bieten allen unseren Kunden die geeignetsten und wettbewerbsfähigsten Preise an.",
        "title2": "Lokaler Umzug",
        "desc2": "Wir bieten qualitativ hochwertige und sichere Transportdienstleistungen für lokale Umzüge mit unserem professionellen Team und modernen Fahrzeugen.",
        "title3": "Fernumzug",
        "desc3": "Wir bieten sichere und schnelle Fernumzugsdienste an jeden Punkt in der Türkei.",
        "button": "DETAILS"
    },
    "about": {
        "title": "Über Uns",
        "desc": "Formül Nakliyat ist ein etabliertes und zuverlässiges Unternehmen, das seit 2005 Haus-zu-Haus-Umzüge, Transport, Fernumzüge, lokale Transporte und Teilgütertransporte anbietet. Mit unserem umfangreichen Servicenetzwerk bieten wir professionelle Lösungen für unsere individuellen und geschäftlichen Kunden. Mit unserer langjährigen Erfahrung im Bereich der Haus-zu-Haus-Umzüge bewerten wir jeden Umzugsprozess als ein spezielles Projekt. Die Sicherheit Ihrer Habseligkeiten hat für uns höchste Priorität. Daher verfolgen wir eine transparente Politik in Bezug auf die Preise für lokale und Fernumzüge und bieten allen unseren Kunden die geeignetsten und wettbewerbsfähigsten Preise an."
    },
    "services": {
        "title": "UNSERE DIENSTLEISTUNGEN",
        "service1": "Lokaler Umzug",
        "service2": "Fernumzug",
        "service3": "Verpackung von Gegenständen",
        "service4": "Teilgütertransport",
        "service5": "Büroumzug",
        "service6": "Lagerung von Gegenständen",
        "details": "DETAILS"
    },
    "stats": {
        "item1": "TEILGÜTERTRANSPORT",
        "item2": "LAGERUNG VON GEGENSTÄNDEN",
        "item3": "LOKALER UMZUG",
        "item4": "FERNUMZUG"
    },
    "service_areas": {
        "title": "SERVICEGEBIETE",
        "area1": "Istanbul Ankara Umzug",
        "area2": "Istanbul Izmir Umzug",
        "area3": "Istanbul Antalya Umzug",
        "details": "DETAILS"
    },
    "blog": {
        "title": "BLOG",
        "post1": "Was bei Haus-zu-Haus-Umzügen zu beachten ist",
        "post2": "Möglichkeiten, Ihre Habseligkeiten sicher zu verpacken",
        "post3": "Professioneller Service bei Fernumzügen",
        "read_more": "Weiterlesen"
    },
    "quote": {
        "title": "Angebotsformular",
        "name": "Ihr Name / Nachname",
        "phone": "Ihre Telefonnummer",
        "email": "Ihre E-Mail-Adresse",
        "message": "Beschreibung",
        "button": "Angebot erhalten"
    },
    "footer": {
        "quick_menu": "Schnellmenü",
        "europe_areas": "Regionen auf der europäischen Seite",
        "asia_areas": "Regionen auf der anatolischen Seite",
        "contact_info": "Kontaktinformationen",
        "address": "Veysel Karani Mah. Zaloğlu Rüstem Cad. Sancaktepe/ İstanbul",
        "hours": "24 Stunden aktiv",
        "newsletter": "Abonnieren Sie unseren Newsletter",
        "newsletter_desc": "Wir senden regelmäßig informative Newsletter über unsere Dienstleistungen.",
        "newsletter_placeholder": "Geben Sie Ihre E-Mail-Adresse ein",
        "subscribe": "SENDEN UND ABONNIEREN",
        "copyright": "© 2025 Formül Nakliyat. Alle Rechte vorbehalten.",
        "privacy": "Datenschutzrichtlinie",
        "terms": "Nutzungsbedingungen"
    }
};

$(document).ready(function() {
    // i18next başlatma
    i18next
        .init({
            lng: 'tr', // Varsayılan dil
            fallbackLng: 'tr', // Dil bulunamazsa kullanılacak dil
            debug: false,
            resources: {
                tr: {
                    translation: trData
                },
                en: {
                    translation: enData
                },
                it: {
                    translation: itData
                },
                de: {
                    translation: deData
                }
            }
        }, function(err, t) {
            // Başlangıçta dil çevirilerini uygula
            updateContent();
            
            // HTML lang özelliğini güncelle
            $('html').attr('lang', i18next.language);
            
            // Aktif dil butonunu işaretle
            updateLanguageButtons();
        });
    
    // Dil değiştirme butonları için olay dinleyicileri
    $('.language-selector a, .lang-btn').on('click', function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        changeLanguage(lang);
    });
    
    // Dil değiştirme fonksiyonu
    function changeLanguage(lang) {
        i18next.changeLanguage(lang, function(err, t) {
            if (err) return console.log('Dil değiştirme hatası:', err);
            
            // İçeriği güncelle
            updateContent();
            
            // HTML lang özelliğini güncelle
            $('html').attr('lang', lang);
            
            // Aktif dil butonunu işaretle
            updateLanguageButtons();
        });
    }
    
    // İçeriği güncelleme fonksiyonu
    function updateContent() {
        // Tüm data-i18n özelliği olan elementleri güncelle
        $('[data-i18n]').each(function() {
            var key = $(this).data('i18n');
            $(this).html(i18next.t(key));
        });
        
        // ID'ye göre elementleri güncelle
        $('#nav-about').html(i18next.t('nav.about'));
        $('#nav-services').html(i18next.t('nav.services'));
        $('#nav-service-areas').html(i18next.t('nav.service_areas'));
        $('#nav-gallery').html(i18next.t('nav.gallery'));
        $('#nav-contact').html(i18next.t('nav.contact'));
        
        // Footer elementlerini güncelle
        $('#footer-contact-info').html(i18next.t('footer.contact_info'));
        $('#footer-address').html(i18next.t('footer.address'));
        $('#footer-phone').html(i18next.t('contact.phone'));
        $('#footer-hours').html(i18next.t('footer.hours'));
        $('#footer-newsletter').html(i18next.t('footer.newsletter'));
        $('#footer-newsletter-desc').html(i18next.t('footer.newsletter_desc'));
        $('#footer-newsletter-placeholder').attr('placeholder', i18next.t('footer.newsletter_placeholder'));
        $('#footer-subscribe').html(i18next.t('footer.subscribe'));
        $('#footer-copyright').html(i18next.t('footer.copyright'));
        $('#footer-privacy').html(i18next.t('footer.privacy'));
        $('#footer-terms').html(i18next.t('footer.terms'));
        
        // Placeholder özelliği olan elementleri güncelle
        $('[data-i18n-placeholder]').each(function() {
            var key = $(this).data('i18n-placeholder');
            $(this).attr('placeholder', i18next.t(key));
        });
        
        // Title özelliği olan elementleri güncelle
        $('[data-i18n-title]').each(function() {
            var key = $(this).data('i18n-title');
            $(this).attr('title', i18next.t(key));
        });
        
        // Telefon numaralarını güncelle
        updatePhoneNumbers();
    }
    
    // Aktif dil butonunu işaretleme fonksiyonu
    function updateLanguageButtons() {
        $('.language-selector a, .lang-btn').removeClass('active');
        $('.language-selector a[data-lang="' + i18next.language + '"], .lang-btn[data-lang="' + i18next.language + '"]').addClass('active');
    }
    
    // Telefon numaralarını güncelleme fonksiyonu
    function updatePhoneNumbers() {
        var currentLang = i18next.language;
        var phoneNumber = '';
        
        // Dile göre telefon numarasını belirle
        if (currentLang === 'tr') {
            phoneNumber = '+90 537 742 06 68';
        } else if (currentLang === 'en' || currentLang === 'it') {
            phoneNumber = '+90 531 696 60 36';
        } else if (currentLang === 'de') {
            phoneNumber = '+90 534 926 50 64';
        }
        
        // Telefon numaralarını güncelle
        $('.phone-number .phone-text').text(phoneNumber);
        $('.mobile-phone').text(phoneNumber);
        $('.whatsapp-button a').attr('href', 'https://wa.me/' + phoneNumber.replace(/\s+/g, ''));
        $('.call-button a').attr('href', 'tel:' + phoneNumber.replace(/\s+/g, ''));
    }
});

