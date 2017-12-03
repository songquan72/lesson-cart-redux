import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './../components/Message';

class MessageContainer extends Component {
	render() {
		var { message } = this.props;
		return (
			<Message message={ message } />
		);
	}
}

MessageContainer.propTypes = {
	message: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
	return {
		message : state.message
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
