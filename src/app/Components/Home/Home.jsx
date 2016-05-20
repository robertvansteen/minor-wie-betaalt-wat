import styles from './home.css';
import React, { Component } from 'react';

class Home extends Component {

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.center}>
					<img src="/images/redux_logo.png" className={styles.logo} />
					<h1 className={styles.title}>Hello world!</h1>
				</div>
			</div>
		);
	}
}

export default Home;
