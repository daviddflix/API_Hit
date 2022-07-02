const product = ['Penne Rigatte', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaghetti', 'Tagliattele' ]

const sauces = [{sauce: 'Pomodoro', description: 'Salsa de Tomate Especial HIT', img: '/Platos/pomodoro.png'},
 {sauce: 'Crema', description: '', img: '/Platos/crema.jpg'}, {sauce: 'Arrabiata', description: 'Salsa Pomodoro HIT con Jalapeños', img: '/Platos/pomodoro.png'} ,
 {sauce: 'Bolognesa', description: 'Pomodoro HIT con Ragu de Carne', img: '/Platos/bolognesasi.png'},
 {sauce: 'Pesto', description: 'Albahaca, Parmesano, Nuez y Aceite de Oliva', img: '/Platos/pesto.png'},
 {sauce: 'Cheddar', description: 'Elaboración Propia de Crema de Cheddar', img: '/Platos/cheddarsi.png'},
 {sauce: 'Puttanesca', description: 'Pomodoro HIT, Aceitunas Negras, Ajo y Alcaparras', img: '/Platos/pomodoro.png'},
 {sauce: 'Oriental', description: 'Vegetales de Estación, Soja, Salsa de Ostras y Aceite de Sesamo', img: '/Platos/oriental.png'},
 {sauce: 'Curry', description: 'Crema con Pasta de Curry Suave', img: '/Platos/chedar.png'},
 {sauce: 'Cuatro quesos', description: 'Queso Muzzarella, Azul, Parmesano y Queso Crema', img: '/Platos/4quesos.png'},
 {sauce: 'Crema de espinaca', description: 'Espinacas Salteadas, Crema, Ajo y Queso Crema', img: '/Platos/cremaespi.png'},
 {sauce: 'Vodka sauce', description: 'Tomate, Cebolla, Crema y Vodka', img: '/Platos/bolognesa.png'},
]
const extra = ['Meatball','Bacon', 'Carne', 'Pollo', 'Queso Parmesano', 'Hongos', 'Aceitunas', 'Jalapeños', 'Tomates Confitados', 'Alcaparras', 'Panes']
const dessert = [{title: 'Cheesecake', picture_url: '/img/Images/cheesecake.jpg', id: 17}, {title: 'Chocotorta', picture_url: '/img/Images/chocotorta.jpg', id: 18}, {title: 'Tiramisu', picture_url: 'img/Images/tiramisu2.jpg', id: 19}]



const beverages = [{title: 'Coca-Cola Light 354ml', price: 230, picture_url: '/img/Drinks/cocalight.jpg', id: 7}, 
{title: 'Coca-Cola Sin Azúcar', price: 270, picture_url: '/img/Drinks/cocasin.webp', id: 8}, 
{title: 'Coca-Cola Sabor Original 354ml', price: 270, picture_url: '/img/Drinks/cocaoriginal.jpg', id: 9}, 
{title: 'Fanta Naranja 354ml', price: 270, picture_url: '/img/Drinks/fanta.webp', id: 10}, 
{title: 'Sprite Lima Limón 354ml', price: 270, picture_url: '/img/Drinks/sprite2.webp', id: 11},  
{title: 'SmartWater Sin Gas 591ml', price: 270, picture_url: '/img/Drinks/smart.jpg', id: 12},
{title: 'Imperial Lager 473ml', price: 350, picture_url: '/img/Drinks/lager.jpeg', id: 13}, 
{title: 'Heineken Regular 473ml', price: 420, picture_url: '/img/Drinks/heicrop.png', id: 14}, 
{title: 'Imperial Amber Lager 473ml', price: 350, picture_url: '/img/Drinks/amber.jpg', id: 15}, 
{title: 'Imperial Ipa 473ml', price: 350, picture_url: '/img/Drinks/ipa2.jpg', id: 16}]

const dessertPrice = 400
const price = 750
const priceExtra = 122
const data = [
    {
     picture_url: '/Platos/conchiglie.png',
     title: 'Conchiglie',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     dessert: {dessert, dessertPrice},
     beverages: beverages
    },
    {
     picture_url:'/Platos/noquis.png',
     title: 'Gnocchi',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/Platos/spaguetti.png',
     title: 'Spaguetti',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/Platos/cooked-penne.webp',
     title: 'Penne Rigate',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/Platos/tagliatellie.png',
     title: 'Tagliattele',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/Platos/cavatelli.png',
     title: 'Cavatelli',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    }
]

module.exports = data