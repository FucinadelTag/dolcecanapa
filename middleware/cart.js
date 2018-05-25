import _ from 'lodash'
import uuidv1 from 'uuid/v1';
import axios from 'axios';

export default function ({ store, route, app }) {

    let shopUid = store.state.settings.uid;
    let cartId = app.$cookies.get('cartId');

    if (typeof cartId == 'undefined') {
        cartId = uuidv1();
        app.$cookies.set('cartId', cartId, {
            maxAge: 60 * 60 * 24 * 365,
            path: '/'
        });
    }

    // let apiUrl = 'http://localhost:3000/api/getCart/' + cartId;
    //
    // axios.get(apiUrl, {
    //     headers:{
    //         addtax: false,
    //         storeid: shopUid
    //     }
    // }).then(response => {
    //         store.commit('cart/SET_CART', response.data.cart)
    //         store.commit('cart/SET_IMPORTO', response.data.importo)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    // });
}
