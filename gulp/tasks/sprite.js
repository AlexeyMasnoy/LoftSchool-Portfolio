'use strict';

module.exports = function () {
	$.gulp.task('svg-sprite', function () {
		return $.gulp.src('./source/images/*.svg')
		.pipe($.gp.svgSprite({
			mode: {
				symbol: {
					dest: './',
					sprite: '../source/images/sprite.svg',
					render: {
						scss: {
							dest: '../source/style/common/_sprite.scss'
						}
					}
				}
			}
		}))
		.pipe($.gulp.dest('./source/'))
	});
};
