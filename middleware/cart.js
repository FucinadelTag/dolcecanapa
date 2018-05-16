import _ from 'lodash'
import uuidv1 from 'uuid/v1';
import axios from 'axios';

export default function ({ store, route, app }) {

    let cartId = app.$cookies.get('cartId');

    if (typeof cartId == 'undefined') {
        cartId = uuidv1();
        app.$cookies.set('cartId', cartId, {
            maxAge: 60 * 60 * 24 * 365
        });
    }

    axios.get('http://localhost:3000/api/getCart/' + cartId)
        .then(response => {
            store.commit('cart/SET_CART', response.data.cart)
        })
        .catch(function (error) {
            console.log(error);
    });
}
