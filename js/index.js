const catalogList = document.querySelector('.catalog__list');
const modalProduct = document.querySelector('.modal_product');

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');

const product = {
    title: 'Бургер макс',
    price: 10088,
    weigth: 5000,
    calories: 15000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod amet tenetur laborum fugit eligendi aliquam ducimus est, commodi facere beatae culpa aliquid sint, tempora consequuntur, quisquam soluta autem temporibus.',
    image: 'img/megaburger.jpg',
    ingredients: ['пшеничная булоска', 'Мега котлета', 'пшеничная булоска', 'Мега котлета']
}

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
ingredientsList.textContent = '';

modalProductDescription.textContent = product.description;
ingredientsCalories.textContent = product.calories;
modalProductPriceCount.textContent = product.price;

const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = item;
    return li;
})

ingredientsList.append(...ingredientsListItems);

catalogList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
    }
});

modalProduct.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }

})