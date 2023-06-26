//Задачи по сайту https://flowersshop.spb.ru/
// покрасить все кнопки "1 клик" в серый цвет фона.

let menuOneClick = document.querySelectorAll('.oct-button.button-one-click');
menuOneClick.forEach(function(menuItem){
menuItem.style.backgroundColor = 'grey';
});

// в блоке "Наши преимущества" сделать курсив (наклонный шрифт) во всех трех баннерах (быстрая доставка в день заказа и т.д.)

//Курсив:
let menuHeader = document.querySelectorAll('.header-list');
menuHeader.forEach(function(menuItem){
menuItem.style.fontStyle='italic';
});

//Жирный:
menuHeader.forEach(function(menuItem){
menuItem.style.fontWeight='bold';
});

//Подчеркнутый:
menuHeader.forEach(function(menuItem){
menuItem.style.textDecoration ='underline';
});


// заголовки "Наши преимущества", "Акции" сделать жирным шрифтом;

let First = document.querySelectorAll('.oct-carousel-header')[0];
First.style.fontWeight='bold';
let Second = document.querySelectorAll('.oct-carousel-header')[1];
Second.style.fontWeight='bold';

//В первом варианте лучше сначала сохранить результат querySelectorAll и потом уже в First и Second класть элементы этого массива:

let Elems = document.querySelectorAll('.oct-carousel-header');
let First = Elems[0];
let Second = Elems[1];
First.style.fontWeight='bold';
Second.style.fontWeight='bold';

let First = document.querySelectorAll('.oct-carousel-header');
for (let i = 0; i < 2; i++) {
  First[i].style.fontWeight='bold';
};


// со слов "Заказать букет" в самой верхней панели (с логотипом которая) убрать подчеркивание;

document.querySelector('.header-order.current-link').style.textDecorationLine ='none';

//5) спрятать блок "Отзывы".

let feedback = document.querySelectorAll('.oct-carousel-header')[4];
feedback.style.display='none';
document.querySelectorAll('.video-list.row').forEach(function(menuItem){
menuItem.style.display='none';
});
