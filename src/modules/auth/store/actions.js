/* responsavel por chamar as mutations que precisa ser alterada
e responsavel por fazer requisições http */
import * as types from './mutation-types'

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}
