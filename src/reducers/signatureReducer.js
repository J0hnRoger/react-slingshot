import * as types from '../actions/actionsType'

export default function signatureReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_SIGNATURE:
            return [...state, Object.assign({}, action.signature)]
        case types.LOAD_SIGNATURES_SUCCESS:
            return action.signatures
        default:
            return state
    }
} 