import Cart from '@/common/Cart.js';

export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28-api.ashley877.loc/',
    responseType: 'json',
    withCredentials: true,
})

export const cart = new Cart();

