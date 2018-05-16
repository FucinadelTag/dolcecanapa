import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    cart: false
})


export const mutations = {
    SET_CART (state, dati) {
      state.cart = dati || false
    }
}


export const getters = {
    getCart: state => {

        let cart = state.cart;

        return cart;

    },
    getCartId: state => {

        let cart = state.cart;

        return cart._id;

    }
}
