import { reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {

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
		const { email, password } = fields;

		return (
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Email</label>
						<input type="email" placeholder="Email" {...email}/>
						{email.touched && email.error && <div>{email.error}</div>}
					</div>
					<div>
						<label>Password</label>
						<input type="password" placeholder="Password" {...password}/>
						{password.touched && password.error && <div>{password.error}</div>}
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

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.password) {
		errors.password = 'Required';
	}

	return errors;
};

export default reduxForm({
	form: 'login',
	fields: ['email', 'password'],
	validate,
})(LoginForm);
