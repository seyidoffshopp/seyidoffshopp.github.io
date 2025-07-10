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
        e.preventDefault();
        personalCabinetModal.style.display = 'block';
    }

    if (personalCabinetBtn && personalCabinetModal) {
        personalCabinetBtn.addEventListener('click', openPersonalCabinetModal);
    }
    if (balanceAddButton && personalCabinetModal) {
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
    const gameListing = document.getElementById('game-listing'); // Bu ID index.html-də olmalıdır!

    const games = [
        {
            id: 1,
            name: 'FREE FIRE DIAMOND',
            image: 'ff.png', // Şəkil faylının adı və yolu düzgün olmalıdır
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
            image: 'pubg.jpg', // Şəkil faylının adı və yolu düzgün olmalıdır
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
            image: 'ttjeton1.jpg', // Şəkil faylının adı və yolu düzgün olmalıdır
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

    // Oyunları göstərən funksiya
    function displayGames() {
        if (gameListing) { // gameListing elementinin mövcudluğunu yoxlayın
            gameListing.innerHTML = ''; // Mövcud "Oyunlar yüklənir..." mətnini təmizlə
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

    // game-detail.html səhifəsi üçün JavaScript məntiqi Başlanğıcı
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
                        <input type="text" id="gameIdInput" placeholder="Free Fire ID nömrənizi daxil edin." required>
                        
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
            } else { // Digər oyun növləri üçün standart forma
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

                // Başlanğıc qiyməti və miqdarı təyin et
                if (game.prices.length > 0) {
                    currentPriceSpan.textContent = `${game.prices[currentQuantityIndex].amount} Azn`;
                    quantityDisplay.textContent = game.prices[currentQuantityIndex].quantity;
                }
                
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
                        const gameIdInput = gameDetailContainer.querySelector('#gameIdInput').value;
                        const selectedMethod = gameDetailContainer.querySelector('.payment-method-item.selected')?.dataset.method;
                        const selectedQuantity = quantityDisplay.textContent;
                        const selectedPrice = currentPriceSpan.textContent;

                        if (gameIdInput && selectedMethod) {
                            alert(`Sifarişiniz qəbul edildi!\nOyun: ${game.name}\nPlayer ID: ${gameIdInput}\nSeçilən Miqdar: ${selectedQuantity}\nÖdəniləcək Məbləğ: ${selectedPrice}\nÖdəniş Üsulu: ${selectedMethod}`);
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

        } else {
            gameDetailContainer.innerHTML = '<p>Oyun tapılmadı.</p>';
        }
    }
    // game-detail.html səhifəsi üçün JavaScript məntiqi Sonu
});
