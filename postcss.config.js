var autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefixer({ browsers: ["> 1%", "ie > 9"] })
	]
}