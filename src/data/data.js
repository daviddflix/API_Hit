const product = ['Penne Rigate', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaguetti', 'Tagliattele' ]
const sauces = ['Pomodoro', 'Crema', 'Arrabiata', 'Bolognesa', 'Pesto', 'Cheddar', 'Puttanesca', 'Oriental', 'Curry', 'Cuatro quesos', 'Crema de espinaca', 'Vodka sauce']
const extra = ['Meatball','Bacon', 'Carne', 'Pollo', 'Queso Parmesano', 'Hongos', 'Aceitunas', 'Jalapeños', 'Tomates Confitados', 'Alcaparras', 'Panes']
const dessert = [{product: 'Cheesecake', picture: '/img/Images/cheesecake.jpg'}, {product: 'Chocotorta', picture: '/img/Images/chocotorta.jpg'}, {product: 'Tiramisu', picture: 'img/Imges/tiramisu.png'}]
const beers = [{product: 'Imperial Lager 473ml', price: 350}, {product: 'Heineken Regular 473ml', price: 420}, {product: 'Imperial Amber Lager 473ml', price: 350}, {product: 'Imperial Ipa 473ml', price: 350}]
const beverages = [{product: 'Coca-Cola Light 354ml', price: 230}, {product: 'Coca-Cola Sin Azúcar', price: 270}, {product: 'Coca-Cola Sabor Original 354ml', price: 270}, {product: 'Fanta Naranja 354ml', price: 270}, {product: 'Sprite Lima Limón 354ml', price: 270}, {product: 'Sprite Lima Limón 354ml', price: 270}, {product: 'Coca-Cola Light 354ml', price: 230}, {product: 'SmartWater Sin Gas 591ml', price: 270}]
const dessertPrice = 400
const price = 629
const priceExtra = 105
const data = [
    {
     picture_url: '/img/conchiglie.jpg',
     title: 'Conchiglie',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     dessert: {dessert, dessertPrice},
     beers: beers,
     beverages: beverages
    },
    {
     picture_url:'/img/gno.jpg',
     title: 'Gnocchi',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/oriental.jpg',
     title: 'Spaguetti',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/penne.jpg',
     title: 'Penne Rigate',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/tagliatelli.jpg',
     title: 'Tagliattele',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/272938238_4857053377720643_6162256948801704121_n.jpg',
     title: 'Cavatelli',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    }
]

module.exports = data