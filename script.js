document.addEventListener('DOMContentLoaded', () => {
    const gameListing = document.getElementById('game-listing');

    // Oyun/Xidmət Məlumatları (Şəkil adlarını yoxlayın!)
    const games = [
        {
            id: 1,
            name: 'FREE FIRE DIAMOND',
            image: 'ff.png', // Şəkil adını yoxlayın!
            description: 'Free Fire üçün diamond paketi. Dərhal hesabınıza yükləyin!',
            // YENİ FREE FIRE QİYMƏTLƏRİ BURADADIR
            prices: [
                { quantity: 100, amount: 2.00 },
                { quantity: 220, amount: 4.00 },
                { quantity: 341, amount: 5.00 },
                { quantity: 572, amount: 8.00 },
                { quantity: 682, amount: 10.00 },
                { quantity: 913, amount: 13.00 },
                { quantity: 1166, amount: 16.00 },
                { quantity: 1507, amount: 21.00 },
                { quantity: 1738, amount: 25.00 },
                { quantity: 2079, amount: 29.00 },
                { quantity: 2398, amount: 32.00 },
                { quantity: 2970, amount: 40.00 },
                { quantity: 'Həftəlik 450', amount: 3.00 }, // Həftəlik əlavə edildi
                { quantity: 'Aylıq 2600', amount: 11.00 } // Aylıq əlavə edildi
            ]
        },
        {
            id: 2,
            name: 'PUBG MOBILE UC',
            image: 'pubg.jpg', // Şəkil adını yoxlayın!
            description: 'PUBG Mobile üçün UC (Unknown Cash) alın və oyununuzu təkmilləşdirin.',
            prices: [
                { quantity: 60, amount: 9.99 },
                { quantity: 300, amount: 44.99 },
                { quantity: 600, amount: 85.99 }
            ]
        },
        {
            id: 3,
            name: 'TIK TOK JETON',
            image: 'tt.jpg', // Şəkil adını yoxlayın!
            description: 'TikTok-da canlı yayımlarda hədiyyə göndərmək üçün jetonlar.',
            prices: [
                { quantity: 100, amount: 10.99 },
                { quantity: 500, amount: 50.99 },
                { quantity: 1000, amount: 95.99 }
            ]
        },
        {
            id: 4,
            name: 'XİDMƏT: VİP Oyun Hesabı',
            image: 'https://via.placeholder.com/250x150?text=Xidmet+4', // Şəkil adını yoxlayın!
            description: 'Eksklüziv oyunlara çıxış və xüsusi üstünlüklər təqdim edən VİP oyun hesabı.',
            prices: [
                { quantity: 1, amount: 99.99 },
                { quantity: 3, amount: 280.00 } // 3 aylıq paket kimi
            ]
        }
    ];

    function displayGames() {
        gameListing.innerHTML = ''; // Mövcud oyunları təmizlə
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

    displayGames(); // Səhifə yüklənəndə oyunları göstər

    gameListing.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
            const gameId = parseInt(e.target.dataset.id);
            const selectedGame = games.find(game => game.id === gameId);
            if (selectedGame) {
                if (typeof window.addToCart === 'function') {
                    window.addToCart(selectedGame);
                } else {
                    console.error("addToCart funksiyası mövcud deyil.");
                    alert("Səbətə əlavə etmə funksiyası yüklənməyib. Zəhmət olmasa səhifəni yeniləyin.");
                }
            }
        }
    });
});
