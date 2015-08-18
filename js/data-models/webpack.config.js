/* global module */
module.exports = {
	entry: '../spec/data-models-spec.js',
	output: {
		filename: 'data-models-bundle.js',
		path: "../..",
		// Output path from the view of the JS/HTML
		publicPath: '.'
	}
};