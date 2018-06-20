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

    let shopUid = store.state.settings.uid;
    let cartId = app.$cookies.get('cartId');
    let cartUrl = process.env.cartUrl;

    //console.log(cartId);

    if (typeof cartId == 'undefined') {
        cartId = uuidv1();
        setCookieCartId (cartId, app);
    }

    //console.log(process.env.cartUrl);

    let apiUrl = cartUrl + '/api/getCart/';


    let response = await axios.get(apiUrl, {
        headers:{
            cartid: cartId,
            storeid: shopUid
        }
    })

    //console.log(response.data.cartData);

    store.commit('cart/SET_CART', response.data.cartData)
    store.commit('cart/SET_IMPORTO', response.data.cartData.importo)
    setCookieCartId (response.data.cartData.cart._id, app)

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
