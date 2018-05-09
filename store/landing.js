import _ from 'lodash'
import PrismicDom from 'prismic-dom'
import {getDocumentById} from '~/tools/prismic.js'


export const state = () => ({
    landing: false,
    list_prodotti: [],
})



export const mutations = {
    SET_DATA (state, landing) {
      state.landing = landing || false
  },
  SET_PRODOTTI (state, prodotti) {
    state.list_prodotti = prodotti || false
  }
}


export const getters = {
    getImmagineTestata: state => {

        let landing = state.landing;

        //console.log(landing.data.immagine_testata);

        let immagine_testata = landing.data.immagine_testata['large'];

        return immagine_testata;

    },
    getTitle: state => {

        let landing = state.landing;

        let title = PrismicDom.RichText.asText(landing.data.titolo)

        return title;
    },
    getId: state => {

        let landing = state.landing;

        let id = landing.id;

        return id;
    },
    getBodyById: (state) => (id) => {
        let landing = state.landing;

        let body = landing.data.body;

        let slice = _.find(body, { 'slice_type': id });

        return slice;

    },
    getBody: state => {

        let landing = state.landing;

        let body = landing.data.body;

        return body;
    },
    getProdotti: state => {

        let prodotti = state.list_prodotti;

        return prodotti;
    },
}
