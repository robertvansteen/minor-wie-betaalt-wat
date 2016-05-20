export function isBrowser() {
	return typeof window !== 'undefined';
}

export function isNode() {
	return typeof window === 'undefined' && typeof process !== 'undefined';
}
