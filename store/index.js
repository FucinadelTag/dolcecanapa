import _ from 'lodash'
import PrismicDom from 'prismic-dom'


const getCategorie = function (){
    return [
        {
            name: 'Cannabis Legale',
            link: '/landing/cannabis-legale',
            isActive: ''
        },
        // {
        //     name: 'Impresa',
        //     link: 'impresa',
        //     isActive: ''
        // },
        // {
        //     name: 'Fisco',
        //     link: 'fisco',
        //     isActive: ''
        // },
        {
            name: 'Estratti di CBD',
            link: '/landing/cbd',
            isActive: ''
        },
        // {
        //     name: 'Famiglia',
        //     link: 'famiglia',
        //     isActive: ''
        // },
    ]
}


export const state = () => ({
    settings: false,
    activeMenu: false,
    categorie: getCategorie(),

})


export const mutations = {
    SET_SETTINGS (state, settings) {
        state.settings = settings || false
    },
    SET_ACTIVE_MENU (state, active_menu) {
        state.activeMenu = active_menu || false
    },

}

export const getters = {
    getCategorie: state => {

        let menu_dataOk = state.categorie;

        let finded = _.find(menu_dataOk, ['link', state.activeMenu]);

        console.log(finded);

        _.set (finded, 'isActive', 'active');

        return menu_dataOk;
    },
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
