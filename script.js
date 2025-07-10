document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menyu Funksionallığı
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

    // Şəxsi Kabinet Modal Funksionallığı
    const personalCabinetBtn = document.getElementById('personal-cabinet-btn');
    const personalCabinetModal = document.getElementById('personal-cabinet-modal');
    const closeModalButton = personalCabinetModal ? personalCabinetModal.querySelector('.close-button') : null;
    const tabButtons = document.querySelectorAll('.modal .tab-btn');
    const tabContents = document.querySelectorAll('.modal .tab-content');

    if (personalCabinetBtn && personalCabinetModal) {
        personalCabinetBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Linkin səhifəni yeniləməsinin qarşısını alır
            personalCabinetModal.style.display = 'block';
        });

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

    // Oyun/Xidmət Listinqi Funksionallığı
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
            image: 'ttjeton1.jpg',
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

    displayGames();

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
                        <label for="gameIdInput">Oyunçu ID / Nick:</label>
                        <input type="text" id="gameIdInput" placeholder="Oyunçu ID-nizi və ya nickinizi daxil edin" required>
                        <label for="emailInput">Emailiniz:</label>
                        <input type="email" id="emailInput" placeholder="Emailinizi daxil edin" required>
                        <button id="orderButton">Sifariş Ver</button>
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
                        <button>Sifariş Ver</button>
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

            if (game.type === 'id_input') {
                const orderButton = document.getElementById('orderButton');
                if (orderButton) {
                    orderButton.addEventListener('click', () => {
                        const gameIdInput = document.getElementById('gameIdInput').value;
                        const emailInput = document.getElementById('emailInput').value;
                        if (gameIdInput && emailInput) {
                            alert(`Sifarişiniz qəbul edildi!\nOyunçu ID/Nick: ${gameIdInput}\nEmail: ${emailInput}\nOyun: ${game.name}`);
                        } else {
                            alert("Zəhmət olmasa, bütün sahələri doldurun.");
                        }
                    });
                }
            }

        } else {
            gameDetailContainer.innerHTML = '<p>Oyun tapılmadı.</p>';
        }
    }
});
