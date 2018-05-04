import Prismic from 'prismic-javascript'
import {getApi} from '~/tools/prismic.js'


const getData = async function () {
    let api = await getApi();

    try {
        const data = await api.getByUID('home', 'home');
        //console.log(data);
        return data
        } catch (e) {
            error({ message: 'Dati home not found', statusCode: 404 })
        }
}


export default async function ({ store, route, error }) {
    let data  = await getData ();
    //console.log(data);
    if (typeof data != 'undefined'){
        store.commit('home/SET_DATA', data)
    }

}
