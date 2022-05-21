const product = ['Penne Rigate', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaguetti', 'Tagliattele' ]
const sauces = [{sauce: 'Pomodoro', description: 'Salsa de Tomate Especial HIT'},
 {sauce: 'Crema', description: ''}, {sauce: 'Arrabiata', description: 'Salsa Pomodoro HIT con Jalapeños'} ,
 {sauce: 'Bolognesa', description: 'Pomodoro HIT con Ragu de Carne'},
 {sauce: 'Pesto', description: 'Albahaca, Parmesano, Nuez y Aceite de Oliva'},
 {sauce: 'Cheddar', description: 'Elaboración Propia de Crema de Cheddar'},
 {sauce: 'Puttanesca', description: 'Pomodoro HIT, Aceitunas Negras, Ajo y Alcaparras'},
 {sauce: 'Oriental', description: 'Vegetale de Estación, Soja, Salsa de Ostras y Aceite de Sesamo'},
 {sauce: 'Curry', description: 'Crema con Pasta de Curry Suave'},
 {sauce: 'Cuatro quesos', description: 'Queso Muzzarella, Azul, Parmesano y Queso Crema'},
 {sauce: 'Crema de espinaca', description: 'Espinacas Salteadas, Crema, Ajo y Queso Crema'},
 {sauce: 'Vodka sauce', description: 'Tomate, Cebolla, Crema y Vodka'},
]
const extra = ['Meatball','Bacon', 'Carne', 'Pollo', 'Queso Parmesano', 'Hongos', 'Aceitunas', 'Jalapeños', 'Tomates Confitados', 'Alcaparras', 'Panes']
const dessert = [{title: 'Cheesecake', picture_url: '/img/Images/cheesecake.jpg'}, {title: 'Chocotorta', picture_url: '/img/Images/chocotorta.jpg'}, {title: 'Tiramisu', picture_url: 'img/Images/tiramisu2.jpg'}]

const beers = [{title: 'Imperial Lager 473ml', price: 350, picture_url: '/img/Drinks/lager.jpeg'}, 
{title: 'Heineken Regular 473ml', price: 420, picture_url: '/img/Drinks/heicrop.png'}, 
{title: 'Imperial Amber Lager 473ml', price: 350, picture_url: '/img/Drinks/amber.jpg'}, 
{title: 'Imperial Ipa 473ml', price: 350, picture_url: '/img/Drinks/ipa2.jpg'}]

const beverages = [{title: 'Coca-Cola Light 354ml', price: 230, picture_url: '/img/Drinks/cocalight.jpg'}, 
{title: 'Coca-Cola Sin Azúcar', price: 270, picture_url: '/img/Drinks/cocasin.webp'}, 
{title: 'Coca-Cola Sabor Original 354ml', price: 270, picture_url: '/img/Drinks/cocaoriginal.jpg'}, 
{title: 'Fanta Naranja 354ml', price: 270, picture_url: '/img/Drinks/fanta.webp'}, 
{title: 'Sprite Lima Limón 354ml', price: 270, picture_url: '/img/Drinks/sprite2.webp'},  
{title: 'SmartWater Sin Gas 591ml', price: 270, picture_url: '/img/Drinks/smart.jpg'}]

const dessertPrice = 400
const price = 699
const priceExtra = 119
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