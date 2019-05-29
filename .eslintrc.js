(function() {
	module.exports = {
		root: true,
		extends: "ftgp",
		parserOptions: {
			ecmaVersion: 6,
			sourceType: "module"
		},
		env: {
			es6: true
		},
		globals: {
			"_": false,
			"MathJax": false
		},
		rules: {
			"lines-between-class-members": ["error", "always"],
			"no-var": ["error"],
			"arrow-parens": ["error", "as-needed", {"requireForBlockBody": false}],
			"arrow-spacing": ["error", {"before": true, "after": true}],
			"padded-blocks": ["error", "never"],
			"space-before-blocks": ["error", "always"],
			"comma-spacing": ["error"],
			"comma-style": ["error", "last"],
			"comma-dangle": ["error", "never"],
			"ftgp/ensure-dependency-order": [
				"error",
				{
					"jquery": "jQuery",
					"core/externalAPI": "externalAPI",
					"core/charts": "chartBuilder",
					"core/widgets/forms/formWidget": "forms"
				}
			],
			"func-style": ["off"]
		}
	};

	/**
	 * The following is to disable the line-break rule on windows computer.
	 * We assume here that Windows devs have the correct git settings
	 * to auto-crlf on pull and auto-lf on push.
	 */

	var inTeamCity = __dirname.indexOf('TeamCityAgent') !== -1 || __dirname.indexOf('BuildAgent') !== -1;
	var isWindows = /^win/.test(process.platform);

	var disableLineBreaks = isWindows && !inTeamCity;

	if (disableLineBreaks) {
		module.exports.rules["linebreak-style"] = 0;
	}
})();
