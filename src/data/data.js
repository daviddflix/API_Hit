const product = ['Penne', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaguetti', 'Tagliattele' ]
const sauces = ['Pomodoro', 'Crema', 'Arrabiata', 'Bolognesa', 'Pesto', 'Cheddar', 'Puttanesca', 'Oriental', 'Curry', 'Cuatro quesos', 'Crema de espinaca', 'Vodka sauce']
const extra = ['Meatball','Bacon', 'Carne', 'Pollo', 'Queso Parmesano', 'Hongos', 'Aceitunas', 'Jalapeños', 'Tomates Confitados', 'Alcaparras', 'Panes']
const price = 549
const priceExtra = 90
const data = [
    {
     image: '/img/conchiglie.jpg',
     description: 'Conchiglie',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     image:'/img/gno.jpg',
     description: 'Gnocchi',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     image: '/img/oriental.jpg',
     description: 'Spaguetti',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     image: '/img/penne.jpg',
     description: 'Penne Rigate',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     image: '/img/tagliatelli.jpg',
     description: 'Tagliattele',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     image: '/img/272938238_4857053377720643_6162256948801704121_n.jpg',
     description: 'Cavatelli',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: [{name: 'Meatball', price: priceExtra}, 
     {name: 'Bacon', price: priceExtra}, 
     {name: 'Carne', price: priceExtra}, 
     {name: 'Pollo', price: priceExtra}, 
     {name: 'Queso Parmesano', price: priceExtra},
     {name: 'Hongos', price: priceExtra},
     {name: 'Aceitunas', price: priceExtra},
     {name: 'Jalapeños', price: priceExtra},
     {name: 'Tomates Confitados', price: priceExtra},
     {name: 'Alcaparras', price: priceExtra},
     {name: 'Panes', price: priceExtra},
     ]
    }
]

module.exports = data