import Prismic from 'prismic-javascript'
import {getApi} from '~/tools/prismic.js'


const getSettings = async function () {
    let api = await getApi();

    try {
        const settings = await api.getByUID('settings', 'dolcecanapa');
        //console.log(settings);
        return settings
        } catch (e) {
            error({ message: 'Settings not found', statusCode: 404 })
        }
}


export default async function ({ store, route, error }) {
    let data  = await getSettings ();
    //console.log(data);
    if (typeof data != 'undefined'){
        store.commit('SET_SETTINGS', data)
    }

}
