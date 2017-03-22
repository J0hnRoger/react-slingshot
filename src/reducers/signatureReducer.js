import * as types from '../actions/actionsType'

export default function signatureReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_SIGNATURE:
            return [...state, Object.assign({}, action.signature)]
        default:
            return state
    }
} 