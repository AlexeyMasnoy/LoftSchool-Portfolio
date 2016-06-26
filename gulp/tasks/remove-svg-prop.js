'use strict';
var rsp = require('remove-svg-properties').stream;

module.exports = function () {
	$.gulp.task('remove-svg-prop', function () {
		return $.gulp.src('./source/images/*.svg')
		.pipe(rsp.remove({
			properties: [rsp.PROPS_FILL]
		}))
		.pipe($.gulp.dest('./source/images'))
	});
};