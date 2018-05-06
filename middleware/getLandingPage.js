import Prismic from 'prismic-javascript'
import {getApi} from '~/tools/prismic.js'


const getLandingPage = async function (uid) {
    let api = await getApi();

    try {
        const landing = await api.getByUID('landing_page', uid);
        return landing
        } catch (e) {
            error({ message: 'Landing Page not found', statusCode: 404 })
        }
}


export default async function ({ store, route, error }) {
    let slug = route.params.slug;

    let landing  = await getLandingPage (slug);

    if (typeof landing != 'undefined'){
        store.commit('landing/SET_DATA', landing)
    }




}
