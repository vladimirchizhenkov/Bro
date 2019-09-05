window.onload = function () {
    let burgerBtn = document.querySelector('.header__burger-btn');
    let burgerCloseBtn = document.querySelector('#burgerMobileClose');

    burgerBtn.onclick = function() {
        let menuId = this.getAttribute('data-btn');
        let menuElement = document.querySelector(menuId);
        menuElement.classList.add('burger--show');

        document.querySelector('body').classList.add('no-scroll');
    };

    burgerCloseBtn.onclick = function() {
        let menuEl = document.querySelector('#burgerMobile');
        menuEl.classList.remove('burger--show');

        document.querySelector('body').classList.remove('no-scroll');
    };
};