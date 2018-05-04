import _ from 'lodash'
import PrismicDom from 'prismic-dom'


export const state = () => ({
    settings: false

})


export const mutations = {
    SET_SETTINGS (state, settings) {
      state.settings = settings || false
    }
}

export const getters = {
    getLogoUrl: state => {

        let settings = state.settings;

        let logoUrl = settings.data.logo.url

        return logoUrl;
    },
    getTitle: state => {

        let settings = state.settings;

        let title = PrismicDom.RichText.asText(settings.data.title)

        return title;
    },
    getDescription: state => {

        let settings = state.settings;

        let description = PrismicDom.RichText.asText(settings.data.description)

        return description;
    },
    getImageTestata: state => {

        let settings = state.settings;

        let immagine_testata = settings.data.immagine_testata['larga'];

        return immagine_testata;
    }
}
