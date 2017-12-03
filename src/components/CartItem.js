import React, { Component } from 'react';
import * as Message from './../contants/Message';
class CartItem extends Component {
	render() {
		var { item } = this.props;
		var { quantity} = item;
		return (
			<tr>
				<th scope="row">
					<img src={ item.product.image }
						alt={ item.product.name } className="img-fluid z-depth-0" />
				</th>
				<td>
					<h5>
						<strong>{ item.product.name }</strong>
					</h5>
				</td>
				<td>{ item.product.price }</td>
				<td className="center-on-small-only">
					<span className="qty">{ quantity }</span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label	
							onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1)}  
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
							<a>—</a>
						</label>
						<label
							onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1)} 
							 className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{ item.product.price * quantity }</td>
				<td>
					<button type="button"
						className="btn btn-sm btn-primary waves-effect waves-light" 
						data-toggle="tooltip" data-placement="top"
						title="" data-original-title="Remove item"
						onClick={ () => this.onDelete(item.product)}
					>
						X
					</button>
				</td>
			</tr>
		);
	}

	onDelete = (product) => {
		var { onDeleteProdcutInCart, onChangeMessage } = this.props;
		onDeleteProdcutInCart(product);
		onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
	}

	onUpdateQuantity = (product, quantity) => {
		if(quantity > 0) {
			var { onUpdateProductInCart, onChangeMessage } = this.props;
			onUpdateProductInCart(product, quantity);
			onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
		}
	}
}

export default CartItem;
