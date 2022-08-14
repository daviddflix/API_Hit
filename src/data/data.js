const product = ['Penne Rigatte', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaghetti', 'Tagliattele' ]

const sauces = [{sauce: 'Pomodoro', description: 'Salsa de Tomate Especial HIT', img: '/Platos/pomodoro.png', available: true},
 {sauce: 'Crema', description: '', img: '/Platos/crema.jpg', available: true}, {sauce: 'Arrabiata', description: 'Salsa Pomodoro HIT con Jalapeños', img: '/Platos/pomodoro.png', available: true} ,
 {sauce: 'Bolognesa', description: 'Pomodoro HIT con Ragu de Carne', img: '/Platos/bolognesasi.png', available: true},
 {sauce: 'Pesto', description: 'Albahaca, Parmesano, Nuez y Aceite de Oliva', img: '/Platos/pesto.png', available: true},
 {sauce: 'Cheddar', description: 'Elaboración Propia de Crema de Cheddar', img: '/Platos/cheddarsi.png', available: true},
 {sauce: 'Puttanesca', description: 'Pomodoro HIT, Aceitunas Negras, Ajo y Alcaparras', img: '/Platos/pomodoro.png', available: true},
 {sauce: 'Oriental', description: 'Vegetales de Estación, Soja, Salsa de Ostras y Aceite de Sesamo', img: '/Platos/oriental.png', available: true},
 {sauce: 'Curry', description: 'Crema con Pasta de Curry Suave', img: '/Platos/cheddar.png', available: true},
 {sauce: 'Cuatro quesos', description: 'Queso Muzzarella, Azul, Parmesano y Queso Crema', img: '/Platos/4quesos.png', available: true},
 {sauce: 'Crema de espinaca', description: 'Espinacas Salteadas, Crema, Ajo y Queso Crema', img: '/Platos/cremaespi.png', available: true},
 {sauce: 'Vodka sauce', description: 'Tomate, Cebolla, Crema y Vodka', img: '/Platos/bolognesa.png', available: true},
]
const extra = [{topping:'Meatball', picture: '/Platos/meatballs.JPG', available: true},
{topping:'Bacon', picture: '/Platos/panceta.JPG', available: true},
{topping:'Carne', picture: '/Platos/carne.JPG', available: true},
{topping:'Pollo', picture: '/Platos/pollo.JPG', available: true},
{topping:'Queso Parmesano', picture: '/Platos/parmesan.JPG', available: true},
{topping:'Hongos', picture: '/Platos/portos.JPG', available: true},
{topping:'Aceitunas', picture: '/Platos/aceitunas.JPG', available: true},
{topping:'Jalapeños', picture: '/Platos/jalapenos.JPG', available: true},
{topping:'Tomates Confitados', picture: '/Platos/tomates.JPG', available: true},
{topping:'Alcaparras', picture: '/Platos/alcaparras.JPG', available: true},
{topping:'Panes', picture: '/Platos/pan.JPG', available: true},
]

const dessert = [{title: 'Cheesecake', picture_url: '/Platos/cheese.JPG', id: 17, available: true},
 {title: 'Chocotorta', picture_url: '/Platos/chocotorta.JPG', id: 18, available: true}, 
 {title: 'Tiramisu', picture_url: '/Platos/tiramisu.JPG', id: 19, available: true}]



const beverages = [{title: 'Coca-Cola Light 354ml', price: 230, picture_url: '/img/Drinks/cocalight.jpg', id: 7, available: true}, 
{title: 'Coca-Cola Sin Azúcar', price: 270, picture_url: '/img/Drinks/cocasin.webp', id: 8, available: true}, 
{title: 'Coca-Cola Sabor Original 354ml', price: 270, picture_url: '/img/Drinks/cocaoriginal.jpg', id: 9, available: true}, 
{title: 'Fanta Naranja 354ml', price: 270, picture_url: '/img/Drinks/fanta.webp', id: 10, available: true}, 
{title: 'Sprite Lima Limón 354ml', price: 270, picture_url: '/img/Drinks/sprite2.webp', id: 11, available: true},  
{title: 'SmartWater Sin Gas 591ml', price: 270, picture_url: '/img/Drinks/smart.jpg', id: 12, available: true},
{title: 'Imperial Lager 473ml', price: 350, picture_url: '/img/Drinks/lager.jpeg', id: 13, available: true}, 
{title: 'Heineken Regular 473ml', price: 420, picture_url: '/img/Drinks/heicrop.png', id: 14, available: true}, 
{title: 'Imperial Amber Lager 473ml', price: 350, picture_url: '/img/Drinks/amber.jpg', id: 15, available: true}, 
{title: 'Imperial Ipa 473ml', price: 350, picture_url: '/img/Drinks/ipa2.jpg', id: 16, available: true}]

const dessertPrice = 400
const price = 800
const priceExtra = 140
const data = [
    {
     picture_url: '/Platos/conchiglie.png',
     title: 'Conchiglie',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     dessert: {dessert, dessertPrice},
     beverages: beverages,
     available: true
    },
    {
     picture_url:'/Platos/noquis.png',
     title: 'Gnocchi',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     available: true
    },
    {
     picture_url: '/Platos/spaguetti.png',
     title: 'Spaguetti',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     available: true
    },
    {
     picture_url: '/Platos/cooked-penne.webp',
     title: 'Penne Rigate',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     available: true
    },
    {
     picture_url: '/Platos/tagliatellie.png',
     title: 'Tagliattele',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     available: true
    },
    {
     picture_url: '/Platos/cavatelli.png',
     title: 'Cavatelli',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     available: true
    }
]

module.exports = data