'use strict';

module.exports = function () {
	$.gulp.task('svg-sprite', function () {
		return $.gulp.src('./source/images/*.svg')
		.pipe($.gp.svgSprite({
			shape: {
				spacing: {
					padding: 5
				}
			},
			mode: {
				css: {
					sprite: '../images/sprite.svg',
					bust: false,
					render: {
						scss: {
							dest: '../style/common/_sprite.scss'
						}
					}
				}
			},
			variables: {
				mapname: 'icons'
			}
		}))
		.pipe($.gulp.dest('./source/'))
	});
};
