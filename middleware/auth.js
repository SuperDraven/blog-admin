import utils from '~/utils/utils'
export default function ({route, req, res, store, redirect}) {
  var token
  token = utils.getcookiesInClient('token')
  console.log(store.getters)
  if (token) {
    store.commit('SET_TOKEN', token)
  }

  if (token) {
    console.log(store.getters)
    // redirect('/login')
  }
}
