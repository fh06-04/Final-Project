module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{json,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};