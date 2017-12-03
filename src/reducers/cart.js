import * as types from './../contants/ActionTypes';


var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndexInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODCUT_IN_CART:
            index = findIndexInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODCUT_IN_CART:
            index = findIndexInCart(state, product);
            if (index !== -1) {
                state[index].quantity = action.quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

var findIndexInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        index = cart.findIndex((e) => {
            return e.product.id === product.id
        })
    }
    return index;
}
export default cart;