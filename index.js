const fetch = require('node-fetch').default;

module.exports = {
	before: () => {
		globalThis.fetch = fetch;
	},
	beforeEach: () => {
		if (window) {
			window.fetch = fetch;
		}
	}
}