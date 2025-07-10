document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menyu Funksionallığı Başlanğıcı
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    if (hamburger && navMenu && closeMenuBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
        closeMenuBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
        // Menyu elementinə kliklənəndə də menyu bağlansın (Mobil UX üçün)
        navMenu.querySelectorAll('ul li a').forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    // Hamburger Menyu Funksionallığı Sonu

    // Şəxsi Kabinet Modal Funksionallığı Başlanğıcı
    const personalCabinetBtn = document.getElementById('personal-cabinet-btn');
    const balanceAddButton = document.querySelector('.bottom-nav .balance-add-button');
    const personalCabinetModal = document.getElementById('personal-cabinet-modal');
    const closeModalButton = personalCabinetModal ? personalCabinetModal.querySelector('.close-button') : null;
    const tabButtons = document.querySelectorAll('.modal .tab-btn');
    const tabContents = document.querySelectorAll('.modal .tab-content');

    function openPersonalCabinetModal(e) {
        if (e) e.preventDefault();
        if (personalCabinetModal) {
            personalCabinetModal.style.display = 'block';
        }
    }

    if (personalCabinetBtn) {
        personalCabinetBtn.addEventListener('click', openPersonalCabinetModal);
    }
    if (balanceAddButton) {
        balanceAddButton.addEventListener('click', openPersonalCabinetModal);
    }

    if (personalCabinetModal) {
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                personalCabinetModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target == personalCabinetModal) {
                personalCabinetModal.style.display = 'none';
            }
        });

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                document.getElementById(button.dataset.tab + '-tab').classList.add('active');
            });
        });
    }
    // Şəxsi Kabinet Modal Funksionallığı Sonu

    // Oyun/Xidmət Məlumatları (Şəkil adlarını yoxlayın!)
    const gameListing = document.getElementById('game-listing');

    const games = [
        {
            id: 1,
            name: 'FREE FIRE DIAMOND',
            image: 'ff.png',
            description: 'Free Fire üçün diamond paketi. Dərhal hesabınıza yükləyin!',
            prices: [
                { quantity: 100, amount: 2.00 }, { quantity: 210, amount: 4.00 },
                { quantity: 340, amount: 6.00 }, { quantity: 560, amount: 9.00 },
                { quantity: 680, amount: 11.00 }, { quantity: 900, amount: 14.00 },
                { quantity: 1150, amount: 17.00 }, { quantity: 1490, amount: 22.00 },
                { quantity: 1720, amount: 26.00 }, { quantity: 2060, amount: 30.00 },
                { quantity: 2380, amount: 33.00 }, { quantity: 2950, amount: 41.00 },
                { quantity: 'Həftəlik 450', amount: 3.00 },
                { quantity: 'Aylıq 2600', amount: 11.00 }
            ],
            type: 'id_input'
        },
        {
            id: 2,
            name: 'PUBG MOBILE UC',
            image: 'pubg.jpg',
            description: 'PUBG Mobile üçün UC (Unknown Cash) alın və oyununuzu təkmilləşdirin.',
            prices: [
                { quantity: 63, amount: 2 }, { quantity: 120, amount: 4 },
                { quantity: 240, amount: 7 }, { quantity: 325, amount: 8 },
                { quantity: 385, amount: 10 }, { quantity: 445, amount: 12 },
                { quantity: 660, amount: 16 }, { quantity: 985, amount: 24 },
                { quantity: 1800, amount: 40 }, { quantity: 2785, amount: 65 },
                { quantity: 3970, amount: 82 }, { quantity: 8340, amount: 160 }
            ],
            type: 'id_input'
        },
        {
            id: 3,
            name: 'TIK TOK JETON',
            image: 'tt.jpg',
            description: 'TikTok-da canlı yayımlarda hədiyyə göndərmək üçün jetonlar.',
            prices: [
                { quantity: 105, amount: 3 }, { quantity: 215, amount: 5 },
                { quantity: 520, amount: 11 }, { quantity: 720, amount: 15 },
                { quantity: 1000, amount: 20 }, { quantity: 1500, amount: 30 }
                ],
            type: 'whatsapp_contact',
            whatsappNumber: '994777696100'
        }
    ];

    // Oyunları ana səhifədə göstərən funksiya
    function displayGames() {
        if (gameListing) {
            gameListing.innerHTML = '';
            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');
                
                gameCard.innerHTML = `
                    <a href="game-detail.html?id=${game.id}" style="text-decoration: none; color: inherit;">
                        <img src="${game.image}" alt="${game.name}">
                        <h3>${game.name}</h3>
                    </a>
                `;
                gameListing.appendChild(gameCard);
            });
        }
    }

    displayGames(); // Səhifə yüklənəndə oyunları göstər

    // Səbət Funksionallığı (İndi aktivdir)
    function updateCartCount() {
        const cartCountElement = document.querySelector('.bottom-nav .cart-count');
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartCountElement) {
            cartCountElement.textContent = cartItems.length;
        }
    }
    updateCartCount();

    // Bildiriş sayını yeniləmək (demo üçün)
    function updateNotificationCount() {
        const notificationCountTop = document.querySelector('.header-icons .notification-count');
        const notificationCountBottom = document.querySelector('.bottom-nav .notification-count-bottom');
        let notifications = 1;
        if (notificationCountTop) {
            notificationCountTop.textContent = notifications;
        }
        if (notificationCountBottom) {
            notificationCountBottom.textContent = notifications;
        }
    }
    updateNotificationCount();

    // Səbət düyməsinə klikləmə funksionallığı əlavə edildi
    const cartButton = document.querySelector('.bottom-nav .nav-item:nth-child(3)');
    if (cartButton) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }

    // game-detail.html səhifəsi üçün JavaScript məntiqi
    const gameDetailContainer = document.getElementById('game-detail-container');
    if (gameDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = parseInt(urlParams.get('id'));
        const game = games.find(g => g.id === gameId);

        if (game) {
            let pricesHtml = '<h4>Mövcud Qiymətlər:</h4><ul>';
            game.prices.forEach(price => {
                pricesHtml += `<li>${price.quantity}: ${price.amount} AZN</li>`;
            });
            pricesHtml += '</ul>';

            let purchaseOptionsHtml = '';
            if (game.type === 'id_input') {
                purchaseOptionsHtml = `
                    <div class="purchase-options">
                        <label for="gameIdInput">Player ID:</label>
                        <input type="text" id="gameIdInput" placeholder="Oyunçu ID-nizi daxil edin." required>
                        
                        <div class="price-bonus-row">
                            <div class="quantity-control">
                                <button class="minus-btn">-</button>
                                <span class="quantity-display">1</span>
                                <button class="plus-btn">+</button>
                            </div>
                            <div class="price-info">
                                <span class="current-price">${game.prices[0].amount} Azn</span>
                                <span class="bonus"><i class="fas fa-star"></i> 1</span>
                            </div>
                        </div>

                        <h4>Ödəniş üsulunu seçin</h4>
                        <div class="payment-method-grid">
                            <div class="payment-method-item selected" data-method="balance">
                                <i class="fas fa-wallet method-icon"></i>
                                <div class="method-name">Balans</div>
                                <div class="method-desc">Hesabınızdakı balans ilə ödəniş</div>
                            </div>
                            <div class="payment-method-item" data-method="card">
                                <i class="fas fa-credit-card method-icon"></i>
                                <div class="method-name">Kart ilə</div>
                                <div class="method-desc">Visa, MasterCard, Maestro</div>
                            </div>
                            <div class="payment-method-item" data-method="m10">
                                <i class="fas fa-mobile-alt method-icon"></i>
                                <div class="method-name">M10</div>
                                <div class="method-desc">Elektron pul kisəsi</div>
                            </div>
                        </div>

                        <div class="order-buttons">
                            <button class="order-confirm-button" id="orderButton">Sifariş et</button>
                            <button class="order-cancel-button">Çıxış</button>
                        </div>
                    </div>
                `;
            } else if (game.type === 'whatsapp_contact') {
                const whatsappMessage = encodeURIComponent(`Salam, ${game.name} haqqında məlumat almaq istərdim. Qiymətlər: ${game.prices.map(p => `${p.quantity}: ${p.amount} AZN`).join(', ')}`);
                purchaseOptionsHtml = `
                    <div class="purchase-options">
                        <p>Sifariş vermək üçün WhatsApp vasitəsilə bizimlə əlaqə saxlayın:</p>
                        <a href="https://wa.me/${game.whatsappNumber}?text=${whatsappMessage}" target="_blank" class="whatsapp-button">
                            <i class="fab fa-whatsapp"></i> WhatsApp ilə Əlaqə
                        </a>
                    </div>
                `;
            } else {
                purchaseOptionsHtml = `
                    <div class="purchase-options">
                        <input type="text" placeholder="İstifadəçi ID / Nick">
                        <button id="orderButton">Sifariş Ver</button>
                        </div>
                `;
            }

            gameDetailContainer.innerHTML = `
                <img src="${game.image}" alt="${game.name}" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
                <h2>${game.name}</h2>
                <p>${game.description}</p>
                ${pricesHtml}
                ${purchaseOptionsHtml}
            `;

            // Miqdar artırma/azaltma və ödəniş seçimi üçün event listenerlər
            if (game.type === 'id_input') {
                const quantityDisplay = gameDetailContainer.querySelector('.quantity-display');
                const minusBtn = gameDetailContainer.querySelector('.minus-btn');
                const plusBtn = gameDetailContainer.querySelector('.plus-btn');
                const currentPriceSpan = gameDetailContainer.querySelector('.current-price');
                let currentQuantityIndex = 0;

                if (game.prices.length > 0) {
                    currentPriceSpan.textContent = `${game.prices[currentQuantityIndex].amount} Azn`;
                    quantityDisplay.textContent = game.prices[currentQuantityIndex].quantity;
                }
                
                if (minusBtn && plusBtn && quantityDisplay && currentPriceSpan) {
                    minusBtn.addEventListener('click', () => {
                        if (currentQuantityIndex > 0) {
                            currentQuantityIndex--;
                            quantityDisplay.textContent = game.prices[currentQuantityIndex].quantity;
                            currentPriceSpan.textContent = `${game.prices[currentQuantityIndex].amount} Azn`;
                        }
                    });

                    plusBtn.addEventListener('click', () => {
                        if (currentQuantityIndex < game.prices.length - 1) {
                            currentQuantityIndex++;
                            quantityDisplay.textContent = game.prices[currentQuantityIndex].quantity;
                            currentPriceSpan.textContent = `${game.prices[currentQuantityIndex].amount} Azn`;
                        }
                    });
                }

                const paymentMethodItems = gameDetailContainer.querySelectorAll('.payment-method-item');
                paymentMethodItems.forEach(item => {
                    item.addEventListener('click', () => {
                        paymentMethodItems.forEach(other => other.classList.remove('selected'));
                        item.classList.add('selected');
                        console.log('Seçilən ödəniş metodu:', item.dataset.method);
                    });
                });

                const orderButton = gameDetailContainer.querySelector('#orderButton');
                if (orderButton) {
                    orderButton.addEventListener('click', () => {
                        const gameIdInput = gameDetailContainer.querySelector('#gameIdInput')?.value;
                        const selectedMethod = gameDetailContainer.querySelector('.payment-method-item.selected')?.dataset.method;
                        const selectedQuantity = quantityDisplay?.textContent;
                        const selectedPrice = currentPriceSpan?.textContent;

                        if (gameIdInput && selectedMethod && selectedQuantity && selectedPrice) {
                            alert(`Sifarişiniz qəbul edildi!\nOyun: ${game.name}\nPlayer ID: ${gameIdInput}\nSeçilən Miqdar: ${selectedQuantity}\nÖdəniləcək Məbləğ: ${selectedPrice}\nÖdəniş Üsulu: ${selectedMethod}`);
                            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                            cartItems.push({ 
                                id: game.id, 
                                name: game.name, 
                                quantity: selectedQuantity, 
                                price: selectedPrice, 
                                method: selectedMethod, 
                                playerID: gameIdInput 
                            });
                            localStorage.setItem('cartItems', JSON.stringify(cartItems));
                            updateCartCount();
                        } else {
                            alert("Zəhmət olmasa, Player ID-ni daxil edin və ödəniş üsulunu seçin.");
                        }
                    });
                }
                
                const cancelButton = gameDetailContainer.querySelector('.order-cancel-button');
                if(cancelButton) {
                    cancelButton.addEventListener('click', () => {
                        alert('Sifariş ləğv edildi.');
                    });
                }
            }

            // Səbət səhifəsinin məntiqi (cart.html)
            const cartItemsContainer = document.getElementById('cart-items-container');
            const cartSummary = document.getElementById('cart-summary');
            const totalPriceElement = document.getElementById('total-price');
            const clearCartBtn = document.getElementById('clear-cart-btn');
            const checkoutForm = document.getElementById('checkout-form');

            if (cartItemsContainer && window.location.pathname.endsWith('cart.html')) {
                displayCartItems(); // Səbəti göstər

                if (clearCartBtn) {
                    clearCartBtn.addEventListener('click', () => {
                        localStorage.removeItem('cartItems');
                        updateCartCount();
                        displayCartItems(); // Səbəti yenilə
                        alert('Səbətiniz təmizləndi!');
                    });
                }

                if (checkoutForm) {
                    checkoutForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const fullName = document.getElementById('full-name').value;
                        const contactEmail = document.getElementById('contact-email').value;
                        const phoneNumber = document.getElementById('phone-number').value;
                        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                        if (cartItems.length === 0) {
                            alert('Səbətiniz boşdur, sifariş tamamlana bilməz.');
                            return;
                        }

                        let orderDetails = `Sifariş Təsdiqləndi!\nAd: ${fullName}\nEmail: ${contactEmail}\nTelefon: ${phoneNumber}\n\nMəhsullar:\n`;
                        let total = 0;
                        cartItems.forEach(item => {
                            orderDetails += `- ${item.name}: ${item.quantity} ədəd, ${item.price} AZN (Player ID: ${item.playerID || 'Daxil edilməyib'})\n`;
                            total += parseFloat(String(item.price).replace(' Azn', ''));
                        });
                        orderDetails += `\nÜmumi Məbləğ: ${total.toFixed(2)} AZN`;

                        alert(orderDetails);
                        
                        localStorage.removeItem('cartItems');
                        updateCartCount();
                        displayCartItems();
                        checkoutForm.reset();
                    });
                }
            }

            function displayCartItems() {
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                if (cartItemsContainer) {
                    cartItemsContainer.innerHTML = '';
                }
                let total = 0;

                if (cartItems.length === 0) {
                    if (cartItemsContainer) cartItemsContainer.innerHTML = '<p>Səbətiniz boşdur.</p>';
                    if (cartSummary) cartSummary.style.display = 'none';
                    return;
                }

                cartItems.forEach((item, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('cart-item');
                    itemDiv.innerHTML = `
                        <p><strong>${item.name}</strong></p>
                        <p>Miqdar: ${item.quantity} | Qiymət: ${item.price}</p>
                        <p>Player ID: ${item.playerID || 'Daxil edilməyib'}</p>
                        <button class="remove-from-cart-btn" data-index="${index}">Səbətdən Sil</button>
                    `;
                    if (cartItemsContainer) cartItemsContainer.appendChild(itemDiv);
                    total += parseFloat(String(item.price).replace(' Azn', ''));
                });

                if (totalPriceElement) totalPriceElement.textContent = `${total.toFixed(2)} AZN`;
                if (cartSummary) cartSummary.style.display = 'block';

                if (cartItemsContainer) {
                    cartItemsContainer.querySelectorAll('.remove-from-cart-btn').forEach(button => {
                        button.addEventListener('click', (e) => {
                            const indexToRemove = parseInt(e.target.dataset.index);
                            let currentItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                            currentItems.splice(indexToRemove, 1);
                            localStorage.setItem('cartItems', JSON.stringify(currentItems));
                            updateCartCount();
                            displayCartItems();
                            alert('Məhsul səbətdən silindi!');
                        });
                    });
                }
            }
        }
    });
// Game Detail Page Logic (game-detail.html)
document.addEventListener('DOMContentLoaded', () => {
    // Only run this script if we are on the game-detail.html page
    if (document.body.classList.contains('game-detail-page')) { 
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = urlParams.get('game');

        const gameData = {
            'freefire': {
                title: 'Garena Free Fire',
                description: 'Garena Free Fire mobil cihazlar üçün hazırlanmış sağ qalma atıcılıq oyunudur. Hər 10 dəqiqəlik oyun sizə naməlum bir adaya yerləşdirir, burada 49 digər oyunçu ilə birlikdə sağ qalmağa çalışırsınız.',
                image: 'img/ff.jpg',
                features: [
                    'Platforma: Mobil (Android, iOS)',
                    'Janr: Battle Royale, Atıcılıq',
                    'Qiymət: 15.00 AZN'
                ]
            },
            'pubgmobile': {
                title: 'PUBG Mobile',
                description: 'PlayerUnknown\'s Battlegrounds (PUBG) Mobile, yüz oyunçunun bir adaya düşərək silah və avadanlıq topladığı və sona qədər sağ qalmaq üçün digər oyunçuları məğlub etməyə çalışdığı bir battle royale oyunudur.',
                image: 'img/pubg.jpg',
                features: [
                    'Platforma: Mobil (Android, iOS)',
                    'Janr: Battle Royale, Atıcılıq',
                    'Qiymət: 20.00 AZN'
                ]
            },
            'tiktok': {
                title: 'TikTok Hesabımız',
                description: 'Ən son yeniliklər, oyunlar haqqında maraqlı videolar və kampaniyalar üçün Seyidoff Shopp TikTok hesabımızı izləyin!',
                image: 'img/tt.jpg',
                features: [
                    'Platforma: TikTok',
                    'Janr: Sosial Media, Promo',
                    'Qiymət: Pulsuz'
                ]
            },
            'csgo': {
                title: 'Counter-Strike: Global Offensive',
                description: 'CS:GO, dünyanın ən populyar taktiki atıcılıq oyunlarından biridir. İki komanda (terrorçular və əks-terrorçılar) arasında partlayıcı obyektləri yerləşdirmək və ya zərərsizləşdirmək üçün mübarizə gedir.',
                image: 'https://via.placeholder.com/300x200?text=CS:GO',
                features: [
                    'Platforma: PC',
                    'Janr: Taktiki Atıcılıq',
                    'Qiymət: 25.00 AZN'
                ]
            },
            'valorant': {
                title: 'Valorant',
                description: 'Valorant, Riot Games tərəfindən hazırlanmış 5v5 taktiki atıcılıq oyunudur. Hər oyunçu unikal bacarıqlara malik bir agent seçir və düşmən komandanı məğlub etmək üçün strategiya qurur.',
                image: 'https://via.placeholder.com/300x200?text=Valorant',
                features: [
                    'Platforma: PC',
                    'Janr: Taktiki Atıcılıq',
                    'Qiymət: 18.00 AZN'
                ]
            },
            'gta5': {
                title: 'Grand Theft Auto V',
                description: 'GTA V, böyük bir açıq dünya macəra oyunudur. Oyunçular Los Santos şəhərində üç fərqli cinayətkarın həyatını yaşayır, missiyaları tamamlayır və şəhəri kəşf edirlər.',
                image: 'https://via.placeholder.com/300x200?text=GTA+V',
                features: [
                    'Platforma: PC, PlayStation, Xbox',
                    'Janr: Açıq Dünya, Macəra',
                    'Qiymət: 40.00 AZN'
                ]
            },
            'lol': {
                title: 'League of Legends',
                description: 'League of Legends, iki komandanın güclü çempionları idarə edərək düşmən bazasını məhv etməyə çalışdığı məşhur bir MOBA oyunudur.',
                image: 'https://via.placeholder.com/300x200?text=LoL',
                features: [
                    'Platforma: PC',
                    'Janr: MOBA',
                    'Qiymət: Pulsuz Oynamaq'
                ]
            },
            'apex': {
                title: 'Apex Legends',
                description: 'Apex Legends, Respawn Entertainment tərəfindən hazırlanmış sürətli, komanda əsaslı bir battle royale atıcılıq oyunudur. Unikal əfsanələr və bacarıqlar ilə rəqiblərinizlə döyüşün.',
                image: 'https://via.placeholder.com/300x200?text=Apex',
                features: [
                    'Platforma: PC, PlayStation, Xbox, Switch',
                    'Janr: Battle Royale, Atıcılıq',
                    'Qiymət: Pulsuz Oynamaq'
                ]
            },
            'minecraft': {
                title: 'Minecraft',
                description: 'Minecraft, oyunçuların bloklardan inşa edib sonsuz dünyaları kəşf etdiyi bir sandbox oyunudur. Yaradıcılıq və sağ qalma rejimlərində sonsuz imkanlar təqdim edir.',
                image: 'https://via.placeholder.com/300x200?text=Minecraft',
                features: [
                    'Platforma: PC, Mobil, Konsol',
                    'Janr: Sandbox, Həyatda qalma',
                    'Qiymət: 30.00 AZN'
                ]
            }
        };

        const game = gameData[gameId];
        const gameDetailContainer = document.getElementById('game-detail-container');

        if (game) {
            gameDetailContainer.innerHTML = `
                <img id="game-detail-image" src="${game.image}" alt="${game.title}" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 25px;">
                <h2 id="game-detail-title">${game.title}</h2>
                <p id="game-detail-description">${game.description}</p>
                
                <h3 id="features-heading">Oyun Xüsusiyyətləri:</h3>
                <ul id="game-detail-features"></ul>

                <div class="purchase-options">
                    <label for="email-input">E-mail adresi:</label>
                    <input type="email" id="email-input" placeholder="Oyunun göndəriləcəyi E-mail">

                    <label for="phone-input">Telefon Nömrəsi:</label>
                    <input type="text" id="phone-input" placeholder="Əlaqə üçün telefon nömrəsi (Whatsapp)">
                    
                    <div class="price-bonus-row">
                        <div class="quantity-control">
                            <button id="minus-quantity">-</button>
                            <span id="quantity-display" class="quantity-display">1</span>
                            <button id="plus-quantity">+</button>
                        </div>
                        <div class="price-info">
                            <span id="game-price">0.00 AZN</span>
                            <span class="bonus"> (+0 bonus)</span>
                        </div>
                    </div>

                    <div class="payment-methods">
                        <h4>Ödəniş Metodları</h4>
                        <div class="payment-method-grid">
                            <div class="payment-method-item" data-method="bank-card">
                                <i class="fas fa-credit-card method-icon"></i>
                                <div class="method-name">Bank Kartı</div>
                                <div class="method-desc">Visa / Mastercard</div>
                            </div>
                            <div class="payment-method-item" data-method="epay">
                                <i class="fas fa-mobile-alt method-icon"></i>
                                <div class="method-name">Mobil Ödəniş</div>
                                <div class="method-desc">Azercell, Bakcell, Nar</div>
                            </div>
                        </div>
                    </div>

                    <div class="order-buttons">
                        <button class="order-confirm-button">Sifarişi Tamamla</button>
                        <button class="order-cancel-button">Ləğv Et</button>
                    </div>

                    <a href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp-button" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp Dəstək
                    </a>
                </div>
            `;

            const featuresList = document.getElementById('game-detail-features');
            game.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            const purchaseOptionsDiv = document.querySelector('.purchase-options');
            const featuresHeading = document.getElementById('features-heading');
            const gamePriceElement = document.getElementById('game-price');
            const whatsappButton = document.querySelector('.whatsapp-button');

            if (game.features.some(f => f.startsWith('Qiymət:')) && game.features.find(f => f.startsWith('Qiymət:')).includes('AZN')) {
                const priceText = game.features.find(f => f.startsWith('Qiymət:')).replace('Qiymət: ', '');
                gamePriceElement.textContent = priceText;
                purchaseOptionsDiv.style.display = 'block';
                featuresHeading.style.display = 'block';
                whatsappButton.href = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent('Salam, mən ' + game.title + ' oyunu haqqında məlumat almaq istəyirəm.')}`;
                whatsappButton.style.display = 'inline-flex';
            } else {
                purchaseOptionsDiv.style.display = 'none';
                featuresHeading.style.display = 'block';
                whatsappButton.style.display = 'none';
                if (gameId === 'tiktok') {
                    whatsappButton.href = `https://www.tiktok.com/@seyidoffshopp_test`; // TikTok profil linki
                    whatsappButton.style.display = 'inline-flex';
                    whatsappButton.textContent = "TikTok-a keçid";
                    whatsappButton.innerHTML = `<i class="fab fa-tiktok"></i> TikTok-a keçid`;
                    whatsappButton.onclick = (e) => { e.preventDefault(); window.open('https://www.tiktok.com/@seyidoffshopp_test', '_blank'); };
                }
            }

            // Kəmiyyət artırma/azaltma funksionallığı
            let quantity = 1;
            const quantityDisplay = document.getElementById('quantity-display');
            
            if (quantityDisplay && gamePriceElement) {
                const plusBtn = document.getElementById('plus-quantity');
                const minusBtn = document.getElementById('minus-quantity');

                if (plusBtn) {
                    plusBtn.addEventListener('click', () => {
                        quantity++;
                        quantityDisplay.textContent = quantity;
                        updateTotalPrice(game, quantity);
                    });
                }
                if (minusBtn) {
                    minusBtn.addEventListener('click', () => {
                        if (quantity > 1) {
                            quantity--;
                            quantityDisplay.textContent = quantity;
                            updateTotalPrice(game, quantity);
                        }
                    });
                }
                updateTotalPrice(game, quantity); // Səhifə yüklənəndə qiyməti bir dəfə yenilə
            }

            // Ödəniş metodu seçimi
            document.querySelectorAll('.payment-method-item').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelectorAll('.payment-method-item').forEach(el => el.classList.remove('selected'));
                    item.classList.add('selected');
                    const selectedMethod = item.dataset.method;
                    console.log('Seçilmiş ödəniş metodu:', selectedMethod);
                });
            });
        } else {
            gameDetailContainer.innerHTML = `
                <h2>Oyun Tapılmadı</h2>
                <p>Axtardığınız oyun tapılmadı. Lütfən, başqa bir oyun seçin.</p>
            `;
        }
    }
});

// Mövcud hamburger menyusu və modal funksionallığı
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const personalCabinetBtn = document.getElementById('personal-cabinet-btn');
    const personalCabinetModal = document.getElementById('personal-cabinet-modal');
    const closeModalButton = document.querySelector('.modal .close-button');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.add('active');
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    }

    if (personalCabinetBtn) {
        personalCabinetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            personalCabinetModal.style.display = 'block';
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            personalCabinetModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == personalCabinetModal) {
            personalCabinetModal.style.display = 'none';
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tab}-tab`).classList.add('active');
        });
    });
});
