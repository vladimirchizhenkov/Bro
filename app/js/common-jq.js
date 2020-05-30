$(document).ready(function() {
    var btnPrev = $('#btnPrev');
    var btnNext = $('#btnNext');
    var tabs = $('.slider__tab');
    var slides = $('.slider__item');

    // Инициализируем слайдер
    sliderInit();

    // Клик в таб
    tabs.on('click', function() {
        // Проверяем статус стрелок
        checkArrowStatus();

        // Добавляем ко всем табам класс slider__tab--default
        tabs.each(function() {
           $(this).addClass('slider__tab--default');
        });

        // Удаляем default-класс у выбранного элемента
        $(this).removeClass('slider__tab--default');

        // Получаем ID текущего таба
        var currentID = $(this).attr('id');
        currentID = `'` + currentID + `'`

        // Получаем по текущему ID соответствующий слайд по data-project аттрибуту
        var currentSlide = $(".slider__item[data-project=" + currentID +"]");

        // Добавляем ко всем слайдам класс hide
        slides.each(function() {
           $(this).addClass('slider__item--hide');
        });

        // Удаляем для текущего слайда статус hide
        currentSlide.removeClass('slider__item--hide');

        // Проверяем статус стрелок
        checkArrowStatus();
    });

    // Клик в стрелки
    // Проверяем какой таб сейчас выбран
    btnPrev.on('click', function() {
        // Получаем индекс текущего слайда
        // Находим текущий слайд и его индекс в массиве
        var currentProject = slides.not('.slider__item--hide').attr('data-project');
        var currentSlideIndex = slides.not('.slider__item--hide').index();

        if (currentSlideIndex === 0) {
            return false;
        }

        // Получаем предыдущий слайд
        var prevSlide = $('.slider__item').not('.slider__item--hide').prev();

        // Скрываем все слайды
        slides.each(function () {
            $(this).addClass('slider__item--hide');
        })

        // Показываем предыдущий слайд
        prevSlide.removeClass('slider__item--hide');

        // Переключаем табы
        tabs.each(function () {
            $(this).addClass('slider__tab--default')
        });

        $('#' + currentProject).prev().removeClass('slider__tab--default');

        // Проверяем статус стрелок
        checkArrowStatus();
    });

    btnNext.on('click', function() {
        // Получаем имя проекта из дата-аттрибута
        var currentProject = slides.not('.slider__item--hide').attr('data-project');

        // Находим текущий слайд и его индекс в массиве
        var currentSlideIndex = slides.not('.slider__item--hide').index();
        var lastSlide = tabs.length - 1;

        if (currentSlideIndex === lastSlide) {
            return false;
        }

        // Получаем следующий слайд
        var nextSlide = slides.not('.slider__item--hide').next();

        // Скрываем все слайды
        slides.each(function () {
            $(this).addClass('slider__item--hide');
        })

        // Показываем следующий слайд
        nextSlide.removeClass('slider__item--hide');

        // Переключаем табы:
        // Добавляем дефолтные свойства
        tabs.each(function () {
            $(this).addClass('slider__tab--default')
        });

        $('#' + currentProject).next().removeClass('slider__tab--default');

        // Проверяем статус стрелок
        checkArrowStatus();
    });

    // Функция инициализации слайдера
    function sliderInit() {
        checkArrowStatus();
    }

    // Функция проверки статуса стрелок
    function checkArrowStatus() {
        var currentSlideIndex = slides.not('.slider__item--hide').index();
        var lastSlide = tabs.length - 1;

        if (currentSlideIndex === 0) {
            btnPrev.addClass('slider__arrow--disable');
        } else {
            btnPrev.removeClass('slider__arrow--disable');
        }

        if (currentSlideIndex === lastSlide) {
            btnNext.addClass('slider__arrow--disable');
        } else {
            btnNext.removeClass('slider__arrow--disable');
        }

    }

});