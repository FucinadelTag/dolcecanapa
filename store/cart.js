import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    cart: false,
    importo: false
})

export const mutations = {
    SET_CART (state, dati) {
        state.cart = dati
    },
    SET_IMPORTO (state, dati) {
        state.importo = dati
    }
}

export const getters = {
    getCart: state => {

        let cart = state.cart;

        return cart.cart;

    },
    getCartItems: state => {

        let cartItems = state.cart.items;

        return cartItems;

    },
    getImporto: state => {

        let importo = state.cart.importo;

        return importo;

    },
    getCartId: state => {

        let cart = state.cart;

        return cart.cart._id;

    }
}
