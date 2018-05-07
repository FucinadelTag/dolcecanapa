import Prismic from 'prismic-javascript'
import {getApi, getDocumentById} from '~/tools/prismic.js'
import _ from 'lodash'


const getLandingPage = async function (uid) {
    let api = await getApi();

    try {
        const landing = await api.getByUID('landing_page', uid);
        return landing
        } catch (e) {
            error({ message: 'Landing Page not found', statusCode: 404 })
        }
}

const getProdotto = async function (item) {

        if (item.prodotto.id){
            let prodotto = await getDocumentById (item.prodotto.id);

            //console.log(callToAction);

            return prodotto;
        }

        return null

}

const manageSlice = async function (slice, key) {
    if (slice.slice_type == 'collection'){
        let prodotti = await Promise.all (_.map(slice.items, await getProdotto));

        console.log('cazzocazzo');

        //console.log(prodotti);

        let prodottiSlice = {};
        prodottiSlice[key] = prodotti;
        //
        // callToActionParagrafo[key+1] = callToAction;

        return prodottiSlice;

    }

}

const getProdottiMap = async function (landing) {
    let arrayProdotti = await Promise.all (_.map(landing.data.body, await manageSlice));

    if (arrayProdotti.length > 0){
        return arrayProdotti;
    }

    return null;

}



export default async function ({ store, route, error }) {
    let slug = route.params.slug;

    let landing  = await getLandingPage (slug);

    if (typeof landing != 'undefined'){
        let prodotti = await getProdottiMap (landing);
        //console.log(prodotti);
        store.commit('landing/SET_DATA', landing);
        store.commit('landing/SET_PRODOTTI', prodotti);
    }




}
