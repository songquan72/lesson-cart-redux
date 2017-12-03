import * as types from './../contants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODCUT_IN_CART,
        product,
        quantity
    }
}

export const actDeleteProductToCart = (product) => {
    return {
        type: types.DELETE_PRODCUT_IN_CART,
        product
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}