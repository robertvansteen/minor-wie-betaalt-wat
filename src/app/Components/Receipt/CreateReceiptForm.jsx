import { reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

class CreateReceiptForm extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		const { fields, handleSubmit } = this.props;
		const { name } = fields;

		return (
			<div>
				<form onSubmit={handleSubmit} method="POST">
					<div>
						<label>Name</label><br/>
						<input type="text" placeholder="Name" {...name}/>
						{name.touched && name.error && <div>{name.error}</div>}
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

/**
 * Validate the form.
 *
 * @param  {Object} values
 * @return {Object}
 */
const validate = values => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Required';
	}

	return errors;
};

export default reduxForm({
	form: 'createReceipt',
	fields: ['name'],
	validate,
})(CreateReceiptForm);
