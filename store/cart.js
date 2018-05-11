import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    cart: false
})


export const mutations = {
    SET_DATA (state, dati) {
      state.cart = cart || false
    }
}


export const getters = {
    getCart: state => {

        let cart = state.cart;

        return cart;

    }
}
