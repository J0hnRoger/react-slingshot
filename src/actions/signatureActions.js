import * as types from './actionsType'
import signatureFactory from './Utils/signatureFactory'

export function createSignature (signature) {
    return { type: types.CREATE_SIGNATURE, signature}
}

export function loadSignaturesSuccess (signatures) {
    return { type: types.LOAD_SIGNATURES_SUCCESS, signatures}
}

export function loadSignatures () {
    return function (dispatch) {
        // Proxy call for avoid dependencies and add abstraction 
        return signatureFactory.getAll().then(signatures => {
          dispatch(loadSignaturesSuccess(signature))
        }).catch(error => { throw error })

}