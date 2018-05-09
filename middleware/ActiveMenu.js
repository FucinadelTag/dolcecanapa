import _ from 'lodash'

export default function ({ store, route }) {
    //let firsLevel = _.split (route.path, "/", 3)[2];
    store.commit('SET_ACTIVE_MENU', route.path)
}
