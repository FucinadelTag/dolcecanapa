import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    dati: false
})


export const mutations = {
    SET_DATA (state, dati) {
      state.dati = dati || false
    }
}


export const getters = {
    getImmagineFumo: state => {

        let dati = state.dati;

        let immagine_fumo = dati.data.immagine_fumo['large'];

        return immagine_fumo;

    },
    getImmagineOlio: state => {

        let dati = state.dati;

        let immagine_olio = dati.data.immagine_olio['large'];

        return immagine_olio;

    }
}
