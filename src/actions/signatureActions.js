import * as types from './actionsType'
export function createSignature (signature) {
    return { type: types.CREATE_SIGNATURE, signature}
}