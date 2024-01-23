const colorSchemes = require("./colorScheme.config.js");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: { extend: colorSchemes },
	plugins: [],
};
