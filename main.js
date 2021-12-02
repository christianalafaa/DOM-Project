let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'The Loafer Black',
        tag: 'theloaferblack',
        price: '695',
        inCart: 0
    },
    {
        name: 'The Loafer Tobacco',
        tag: 'theloafertobacco',
        price: '695',
        inCart: 0
    },
    {
        name: 'The Loafer Daino',
        tag: 'theloaferdaino',
        price: '695',
        inCart: 0
    },
    {
        name: 'The Loafer Fango',
        tag: 'theloaferperla',
        price: '695',
        inCart: 0
    },
    {
        name: 'The Loafer Perla',
        tag: 'theloaferperla',
        price: '695',
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = 1
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
  

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}
onLoadCartNumbers();
