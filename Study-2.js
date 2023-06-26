//Задачи по сайту https://flowersshop.spb.ru/
// в блоке "Акции" у каждого цветка есть "Новая цена". Нужно добавить содержимое этой новой цены ("от 6500 руб.)" в data-атрибут newprice кнопки "купить" и кнопки "1 клик".

//Оптимально:
let allProducts = document.querySelectorAll('.products')[0]; //выбрали раздел «Акции»
let allButtonsCart = allProducts.querySelectorAll('.button-cart, .button-one-click'); //выбрали все блоки кнопок
for (let i=0; i< allButtonsCart.length; i++) {
let buttonParent = allButtonsCart[i].closest('.product-block'); //нашли родительский блок i-й кнопки
let prodPrice = buttonParent.querySelector('.price-new'); //нашли новую цену от род блока i-й кнопки
allButtonsCart[i].dataset.newprice = prodPrice.innerHTML;};

// если нужен именно один элемент в allProducts, то лучше использовать querySelector или выбирать из массива прямо при присвоении allProducts. И еще его лучше называть "обертка" (wrapper):

let allProductsWrapper = document.querySelector('.products');
// или
let allProductsWrapper = document.querySelectorAll('.products')[1]; // если нужен не первый, а, скажем, второй элемент выборки.

// С forEach:

let allProducts = document.querySelectorAll('.products')[0]; //выбрали раздел «Акции»
let allButtonsCart = allProducts.querySelectorAll('.button-cart, .button-one-click'); //выбрали все блоки кнопок
allButtonsCart.forEach(allButtonsCart=>{
let buttonParent = allButtonsCart.closest('.product-block'); //нашли родительский блок i-й кнопки
let prodPrice = buttonParent.querySelector('.price-new'); //нашли новую цену от род блока i-й кнопки
allButtonsCart.dataset.newprice = prodPrice.innerHTML;});

// другие варианты:
let allProducts = document.querySelectorAll('.products')[0];
let allButtonsCart = allProducts.querySelectorAll('.button-cart');
allButtonsCart.forEach(allButtonsCart=>{
let buttonParent = allButtonsCart.closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
allButtonsCart.dataset.newprice = prodPrice.innerHTML;
let buttonClick = buttonParent.querySelector('.button-one-click');
buttonClick.dataset.newprice = prodPrice.innerHTML;
});

let allProducts = document.querySelectorAll('.products')[0];
let allButtonsClick = allProducts.querySelectorAll('.button-one-click');
allButtonsClick.forEach((allButtonsClick, i)=>{
let buttonParent = allButtonsClick.closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
allButtonsClick.dataset.newprice = prodPrice.innerHTML;
let buttonCart = document.querySelector('.button-one-click');
buttonCart[i].dataset.newprice = prodPrice.innerHTML;
});

let allProducts = document.querySelectorAll('.products')[0];
let allButtonsClick = allProducts.querySelectorAll('.button-one-click');
let allButtonsCart = allProducts.querySelectorAll('.button-cart');
allButtonsClick.forEach((allButtonsClick, i)=>{
let buttonParent = allButtonsClick.closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
allButtonsClick.dataset.newprice = prodPrice.innerHTML;
allButtonsCart[i].dataset.newprice = prodPrice.innerHTML;
});

let allButtonsCart = document.querySelectorAll('.button-cart');
let allButtonsClick = document.querySelectorAll('.button-one-click');
for (let i=0; i< allButtonsClick.length; i++) {
let buttonParent = allButtonsCart[i].closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
allButtonsCart[i].dataset.newprice = prodPrice.innerHTML;
allButtonsClick[i].dataset.newprice = prodPrice.innerHTML;
};

// Тоже допустимый вариант (плохо, что в цикле не используется length, что указаны номера элементов и нет выборки по блоку):
let allButtons = document.querySelectorAll('.button-cart, .button-one-click');
for (let i=0; i<=15; i++) {
let buttonParent = allButtons[i].closest('.product-block'); //нашли родительский блок i-й кнопки
let prodPrice = buttonParent.querySelector('.price-new'); //нашли новую цену от род блока i-й кнопки
allButtons[i].dataset.newprice = prodPrice.innerHTML;};

// то же самое, но содержимое новой цены в data-атрибутах должно быть просто числом 6500, 10100 и т.д, т.е. не должно быть букв и пробелов.
//И после этого в консоли вывести сумму этих цен по всему блоку "Акции". 

let allProducts = document.querySelectorAll('.products')[0]; //выбрали раздел «Акции»
let allButtonsCart = allProducts.querySelectorAll('.button-cart, .button-one-click'); //выбрали все блоки кнопок
for (let i=0; i< allButtonsCart.length; i++) {
let buttonParent = allButtonsCart[i].closest('.product-block'); //нашли родительский блок i-й кнопки
let prodPrice = buttonParent.querySelector('.price-new'); //нашли новую цену от род блока i-й кнопки
let thePrice = prodPrice.innerHTML.replace(/\D/g, "");
let intgr = parseInt(thePrice);
allButtonsCart[i].dataset.newprice = thePrice;};

//вариант с суммой внутри
let allButtonsCart = document.querySelectorAll('.button-cart');
let sum = 0;
for (let i=0; i<=7; i++) {
let buttonParent = allButtonsCart[i].closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
let thePrice = prodPrice.innerHTML.replace(/\D/g, "");
let intgr = parseInt(thePrice);
sum = sum + intgr;
allButtonsCart[i].dataset.newprice = thePrice;
allButtonsClick[i].dataset.newprice = thePrice;};

let allButtonsClick = document.querySelectorAll('.button-one-click');
for (let i=0; i<=7; i++) {
let buttonParent = allButtonsClick[i].closest('.product-block');
let prodPrice = buttonParent.querySelector('.price-new');
let thePrice = prodPrice.innerHTML.replace(/\D/g, "");
allButtonsClick[i].dataset.newprice = thePrice;};

//Складываем:

let prices = document.querySelectorAll('[data-newprice]');
let sum = 0;
prices.forEach (prices =>{
let attribute = prices.getAttribute('data-newprice');
let intgr = parseInt(attribute);
sum = sum + intgr;})
console.log(sum);

//если только одну сумму на блок:
let prices = document.querySelectorAll('.button-cart[data-newprice]');
let sum = 0;
prices.forEach (prices =>{
let attribute = prices.getAttribute('data-newprice');
let intgr = parseInt(attribute);
sum = sum + intgr;})
console.log(sum);

// в блоке "Сезонные предложения" поменять все картинки на ту, которая идет первой (Гвоздики красные 25 шт)

let allProducts = document.querySelectorAll('.products');
let imgSource = allProducts[2].querySelector('.product-wrapper img').src;
let images = allProducts[2].querySelectorAll('.product-wrapper img');
for (k=1; k< images.length; k++) {images[k].src = images[0].src;};

// в блоке "Сезонные предложения" в названия всех продуктов в конец добавить три подчеркнутых восклицательных знака.

let allProducts = document.querySelectorAll('.products')[2];
let titles = allProducts.querySelectorAll('.product-title');
for (k=1; k<=titles.length; k++) {titles[k].insertAdjacentHTML('beforeEnd', '<div style="text-decoration: underline;">!!!</div>');};

// сделать это не в каждом блоке, а только в каждом втором

let allProducts = document.querySelectorAll('.products')[2];
let titles = allProducts.querySelectorAll('.product-title');
for (k=1; k<=titles.length; k=k+2) {titles[k].insertAdjacentHTML('beforeEnd', '<div style="text-decoration: underline;">!!!</div>');};

// в разделе Наши контакты слова
//ПН-ВС: с 9.00 до 21.00 ч.
//обернуть в ссылку, которая должна вести на звонок (tel:+79164782345)

let contacts = document.querySelector('.header-phones');
let item = contacts.querySelector('span');
let innerText = item.innerHTML;
item.innerHTML='<a href="tel:79164782345">' + innerText + '</a>';
//или
item.innerHTML=`<a href="tel:79164782345">${innerText}</a>`;
//или
item.innerHTML=`<a href="tel:79164782345">${item.innerHTML}</a>`;

item.insertAdjacentHTML('afterBegin', '<a href="tel: +779164782345;"></a>'); // вставляет ссылку отдельно от текста

// В блоке ОБЩАЙТЕСЬ С НАМИ сначала покрасить в зеленый все иконки соцсетей, а потом спрятать их.

let socials = document.querySelectorAll('.socials-box i.fa, .socials-box img');
socials.forEach(icon=>icon.style.color = 'green');
socials.forEach(icon=>icon.style.display = 'none');

socials.forEach(icon=>icon.style.display = 'block') // показать иконки

// Внизу, где подписка, есть галочка "Я прочитал политику конфиденциальности и согласен с условиями". Нужно поставить эту галочку средствами javascript

let terms = document.querySelector('.oct-text-terms');
let checkBoxField = terms.querySelector('input');
checkBoxField.checked = true;

let terms = document.querySelector('.oct-text-terms');
terms.querySelector('input').checked = ‘true’;

document.querySelector('.oct-text-terms').querySelector('input').checked = ‘true’;
