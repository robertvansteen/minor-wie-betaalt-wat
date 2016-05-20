class Group {
	constructor(data = {}) {
		Object.assign(this, data);
	}

	/**
	 * Get the balance for two users.
	 *
	 * @param  {Object} user1
	 * @param  {Object} user2
	 * @return {Float}
	 */
	getBalance(user1, user2) {
		const openDebts = this.debts.filter(x => x.status === 'open');

		const credits = openDebts
			.filter(x => x.creditor === user1.id)
			.filter(x => x.debtor === user2.id)
			.map(x => x.amount)
			.reduce((prev, curr) => prev + curr, 0);

		const debts = openDebts
			.filter(x => x.status === 'open')
			.filter(x => x.creditor === user2.id)
			.filter(x => x.debtor === user1.id)
			.map(x => x.amount)
			.reduce((prev, curr) => prev + curr, 0);

		return credits - debts;
	}
}

export default Group;
