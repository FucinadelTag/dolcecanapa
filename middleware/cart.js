import _ from 'lodash'
import uuidv1 from 'uuid/v1';
import axios from 'axios';

const setCookieCartId = (cartId, app) => {
    app.$cookies.set('cartId', cartId, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/'
    });
}

export default async function ({ store, route, app }) {

    // let shopUid = store.state.settings.uid;
    // let cartId = app.$cookies.get('cartId');
    //
    // console.log(cartId);
    //
    // if (typeof cartId == 'undefined') {
    //     cartId = uuidv1();
    //     setCookieCartId (cartId, app);
    // }
    //
    // let apiUrl = 'https://cart.dolcecanapa.it/api/getCart/';
    //
    //
    // let response = await axios.get(apiUrl, {
    //     headers:{
    //         cartid: cartId,
    //         storeid: shopUid
    //     }
    // })
    //
    // store.commit('cart/SET_CART', response.data.cart)
    // store.commit('cart/SET_IMPORTO', response.data.importo)
    // setCookieCartId (response.data.cart._id, app)

    //console.log('cart');

    // axios.get(apiUrl, {
    //     headers:{
    //         cartid: cartId,
    //         storeid: shopUid
    //     }
    // }).then(response => {
    //
    //         console.log(response.data);
    //         store.commit('cart/SET_CART', response.data.cart)
    //         store.commit('cart/SET_IMPORTO', response.data.importo)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    // });
}
