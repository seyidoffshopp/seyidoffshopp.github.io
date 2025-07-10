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
        if (e) e.preventDefault(); // Null check əlavə edildi
        if (personalCabinetModal) { // personalCabinetModal mövcudluğunu yoxla
            personalCabinetModal.style.display = 'block';
        }
    }

    if (personalCabinetBtn) { // personalCabinetBtn mövcudluğunu yoxla
        personalCabinetBtn.addEventListener('click', openPersonalCabinetModal);
    }
    if (balanceAddButton) { // balanceAddButton mövcudluğunu yoxla
        balanceAddButton.addEventListener('click', openPersonalCabinetModal);
    }

    if (personalCabinetModal) { // Modal elementi mövcuddursa yalnız bu kodu işə sal
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
                { quantity: 3
