import _ from 'lodash'

export default function ({ store, route }) {
    let firsLevel = _.split (route.path, "/", 3)[1];

    let path = '/'+firsLevel + '/'

    if (firsLevel == 'landing') {
        path = route.path
    }

    console.log(path);

    store.commit('SET_ACTIVE_MENU', path)
}
