// data/menu.js

export const categories = [
    { id: 'all', label: 'Tout', icon: '🍽️' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'tacos', label: 'Tacos', icon: '🌮' },
    { id: 'sandwich', label: 'Sandwich', icon: '🥙' },
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'naan', label: 'Naan', icon: '🫓' },
];

export const menu = [
    // ---------- BURGERS ----------
    {
        id: 1,
        category: 'burgers',
        name: 'Pablo Classic',
        description: 'Steak haché, cheddar fondu, salade, tomate, sauce maison',
        price: 35,
        image: '/images/dishes/placeholder.jpg',
        popular: true,
    },
    {
        id: 2,
        category: 'burgers',
        name: 'Pablo Chicken',
        description: 'Poulet croustillant, cheddar, salade, sauce Pablo',
        price: 35,
        image: '/images/dishes/placeholder.jpg',
    },
    {
        id: 3,
        category: 'burgers',
        name: 'Double Pablo',
        description: 'Double steak, double cheddar, oignons caramélisés',
        price: 50,
        image: '/images/dishes/placeholder.jpg',
        popular: true,
    },

    // ---------- TACOS ----------
    {
        id: 4,
        category: 'tacos',
        name: 'Tacos Poulet',
        description: 'Poulet mariné, frites, sauce fromagère, salade',
        price: 30,
        image: '/images/dishes/placeholder.jpg',
        popular: true,
    },
    {
        id: 5,
        category: 'tacos',
        name: 'Tacos Mixte',
        description: 'Poulet + steak, frites, sauce fromagère, cheddar',
        price: 40,
        image: '/images/dishes/placeholder.jpg',
    },
    {
        id: 6,
        category: 'tacos',
        name: 'Tacos XXL',
        description: 'Double portion, poulet, steak, cheddar, sauce maison',
        price: 55,
        image: '/images/dishes/placeholder.jpg',
    },

    // ---------- SANDWICH ----------
    {
        id: 7,
        category: 'sandwich',
        name: 'Sandwich Pablo',
        description: 'Pain frais, poulet pané, cheddar, crudités, sauce',
        price: 25,
        image: '/images/dishes/placeholder.jpg',
        popular: true,
    },
    {
        id: 8,
        category: 'sandwich',
        name: 'Sandwich Thon',
        description: 'Thon, œuf, crudités, olives, sauce mayo',
        price: 22,
        image: '/images/dishes/placeholder.jpg',
    },

    // ---------- PIZZA ----------
    {
        id: 9,
        category: 'pizza',
        name: 'Pizza Margherita',
        description: 'Sauce tomate, mozzarella, origan',
        price: 45,
        image: '/images/dishes/placeholder.jpg',
    },
    {
        id: 10,
        category: 'pizza',
        name: 'Pizza Pablo',
        description: 'Poulet, poivrons, mozzarella, olives, sauce maison',
        price: 55,
        image: '/images/dishes/placeholder.jpg',
        popular: true,
    },

    // ---------- NAAN ----------
    {
        id: 11,
        category: 'naan',
        name: 'Naan Poulet',
        description: 'Naan frais garni de poulet mariné, crudités, sauce',
        price: 28,
        image: '/images/dishes/placeholder.jpg',
    },
    {
        id: 12,
        category: 'naan',
        name: 'Naan Mixte',
        description: 'Poulet + viande hachée, crudités, sauce fromagère',
        price: 35,
        image: '/images/dishes/placeholder.jpg',
    },
];

export const locations = [
    {
        id: 1,
        city: 'Martil',
        address: '91 Rue des Princes Héritiers, Martil 93150',
        phone: '+212 660 671 609',
        phoneLink: '+212660671609',
        mapLink: 'https://maps.app.goo.gl/1512pwBzkTxjtGzs8',
        // Embed URL — points to the same coordinates
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.5922422863927!2d-5.275590460738408!3d35.61536200290523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b453617af0d8b%3A0xa02e55a69633dfc1!2sSnack%20Pablo%20-%20Restaurant%20Martil!5e0!3m2!1sen!2ses!4v1790623941711!5m2!1sen!2ses',
    },
    {
        id: 2,
        city: 'Tétouan',
        address: 'Av. des FAR, Tétouan 93000',
        phone: '+212 711 671 199',
        phoneLink: '+212711671199',
        mapLink: 'https://maps.app.goo.gl/1512pwBzkTxjtGzs8',
        // Embed URL
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.4143427095937!2d-5.344837524358701!3d35.59284457261594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b436018532e0d%3A0x6646699dc3c3d9f1!2sSnack%20Pablo!5e0!3m2!1sen!2ses!4v1790624058793!5m2!1sen!2ses',
    },
];

export const brand = {
    name: 'Snack Pablo',
    instagram: 'https://instagram.com/snack_pablo',
    whatsapp: '+212660671609', // default — Martil
    tagline: 'Fast food à Martil & Tétouan',
};