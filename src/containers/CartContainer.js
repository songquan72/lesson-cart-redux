import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../contants/Message';
import { actDeleteProductToCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
	render() {
		var { cart } = this.props;
		return (
			<Cart>
				{this.showCartItem(cart)}
				{this.showTotalAmoubt(cart)}
			</Cart>
		);
	}

	showCartItem = (cart) => {
		var { onDeleteProdcutInCart, onChangeMessage, onUpdateProductInCart } = this.props;
		var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return <CartItem
					key={index}
					item={item}
					onDeleteProdcutInCart={onDeleteProdcutInCart}
					onChangeMessage={onChangeMessage}
					onUpdateProductInCart={onUpdateProductInCart}
				/>;
			});
		}
		return result;
	}

	showTotalAmoubt = (cart) => {
		var result = null;
		if (cart.length > 0) {
			result = <CartResult cart={cart} />
		}
		return result;
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}),
			quantity: PropTypes.number.isRequired,
		}),
	).isRequired,
	onDeleteProdcutInCart: PropTypes.func.isRequired,
	onChangeMessage: PropTypes.func.isRequired,
	onUpdateProductInCart: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteProdcutInCart: (product) => {
			dispatch(actDeleteProductToCart(product));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		},
		onUpdateProductInCart: (product, quantity) => {
			dispatch(actUpdateProductInCart(product, quantity));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
