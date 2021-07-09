// mutations serve para alterar o status do state, que é invocada por uma actions
import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.token = payload
  }
}
