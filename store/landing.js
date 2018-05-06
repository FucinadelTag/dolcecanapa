import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    landing: false
})


export const mutations = {
    SET_DATA (state, landing) {
      state.landing = landing || false
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
    getBodyById: (state) => (id) => {
        let landing = state.landing;

        let body = landing.data.body;

        let slice = _.find(body, { 'slice_type': id });

        return slice;

    },
    getBody: state => {

        let landing = state.landing;

        let body = landing.data.body;

        console.log(body);

        return body;
    },
}
