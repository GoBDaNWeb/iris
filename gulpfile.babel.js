import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import sourcemaps from "gulp-sourcemaps";
import bro from "gulp-bro";
import babelify from "babelify";
import ghPages from "gulp-gh-pages";
import sassGlob from "gulp-sass-glob";
import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";


//const sassGlob = require('gulp-sass-glob');

const routes = {
	pug: {
		watch: "src/**/*.pug",
		src: "src/*.pug",
		dest: "build",
	},
	img: {
		src: "src/assets/images/**/*",
		dest: "build/assets/images/",
	},
	fonts: {
		src: "src/assets/fonts/*",
		dest: "build/assets/fonts/",
	},
	libs: {
		src: "src/assets/libs/**/*",
		dest: "build/assets/libs/",
	},
	scss: {
		watch: "src/scss/**/*.scss",
		watchComponents: "src/components/**/*.scss",
		src: "src/scss/style.scss", // объединение в один файл
		dest: "build/css", 
	},
	js: {
		watch: "src/js/**/*.js",
		watchComponents: "src/components/**/*.js",
		//src: "src/js/main.js", // объединение в один файл
		src: "src/js/*.js", //не объедянять в один файл, файлы создавать в src/js/ и подключать отдельно в футере
		dest: "build/js",
	},
	sprite: {
		watch: "src/_sprite.svg",
		src: "src/_sprite.svg", 
		dest: "build", 
	},
	
};

// BROWSER SYNC
const webserver = () =>
	gulp.src("build").pipe(ws({
		livereload: true,
		open: true
	}));

// PUG
const pug = () =>
	gulp.src(routes.pug.src).pipe(gpug({
		pretty: true
	})).pipe(gulp.dest(routes.pug.dest));

//SASS	

sass.compiler = require("node-sass");
/*
const styles = () =>
	gulp
	.src(routes.scss.src)
	.pipe(sassGlob())
	//.pipe(sass().on("error", sass.logError))
	.pipe(
		autoprefixer({
			browsers: ["last 2 versions"],
		})
	)
	
	//.pipe(sourcemaps.init())       // активируем gulp-sourcemaps
    //    .pipe(sass({
    //        outputStyle: "nested"      // вложенный (по умолчанию)
    //    }).on("error", sass.logError)) // уведомление об ошибках
    //    .pipe(sourcemaps.write("."))   // создание карты css.map в текущей папке
	
	//.pipe(miniCSS()) //минифицировать css
	.pipe(gulp.dest(routes.scss.dest));
*/
const stylesBuild = () =>
	gulp
	.src(routes.scss.src)
	.pipe(sassGlob())
	.pipe(sass().on("error", sass.logError))
	.pipe(
		autoprefixer({
			browsers: ["last 2 versions"],
		})
	)
		
	//.pipe(miniCSS()) //минифицировать css
	.pipe(gulp.dest(routes.scss.dest));

const stylesDev = () =>
	gulp
	.src(routes.scss.src)
	.pipe(sassGlob())
	//.pipe(sass().on("error", sass.logError))
	.pipe(
		autoprefixer({
			browsers: ["last 2 versions"],
		})
	)
	
	.pipe(sourcemaps.init())       // активируем gulp-sourcemaps
        .pipe(sass({
            outputStyle: "nested"      // вложенный (по умолчанию)
        }).on("error", sass.logError)) // уведомление об ошибках
        .pipe(sourcemaps.write("."))   // создание карты css.map в текущей папке
	
	//.pipe(miniCSS()) //минифицировать css
	.pipe(gulp.dest(routes.scss.dest));
/*
const svg = () =>
	gulp.src('src/assets/images/icons/*.svg')

	// minify svg
	
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	
	// remove all fill, style and stroke declarations in out shapes
	.pipe(cheerio({
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: {xmlMode: true}
	}))
	// cheerio plugin create unnecessary string '&gt;', so replace it.
	.pipe(replace('&gt;', '>'))
	
	// build svg sprite

	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: "../sprite.svg",
				example: true
			}
		}
	}))

    .pipe(gulp.dest("build/assets/images/icons/sprite"));
*/


//CLEAN
const clear = () => del(["build"]);

//COPY FONTS
const fonts = () => {
	return gulp.src('src/assets/fonts/**/*')
	.pipe(gulp.dest('build/assets/fonts'))
};

//COPY LIBS
const libs = () => {
	return gulp.src('src/libs/**/*')
		.pipe(gulp.dest('build/libs'))
};

//COPY IMAGES
const img = () =>
	gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dest));

const sprite = () =>
	gulp.src(routes.sprite.src).pipe(gulp.dest(routes.sprite.dest));

//WATCH - следить
const watch = () => {

	gulp.watch(routes.pug.watch, pug);
	gulp.watch(routes.img.src, img);
	gulp.watch(routes.scss.watch, stylesDev);
	gulp.watch(routes.scss.watchComponents, stylesDev);
	gulp.watch(routes.js.watch, js);
	gulp.watch(routes.js.watchComponents, js);
	gulp.watch(routes.sprite.watch, sprite);
};

//JS
const js = () =>
	gulp
	.src(routes.js.src)
	.pipe(
		bro({
			transform: [babelify.configure({
				presets: ["@babel/preset-env"]
			})],
		})
	)
	//.pipe(minify()) // минификация js
	.pipe(gulp.dest(routes.js.dest));


//BUILD
const ghDeploy = () =>
	gulp.src("build/**/*").pipe(
		ghPages({
			//remoteUrl: "https://github.com/EasyCoders-ru/gulp-90-minutes.git",
		})
	);

/*
const prepare = gulp.series([clear, img, fonts, libs]);
const assets = gulp.series([pug, styles, js]);
const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build, ghDeploy]);
*/

const prepare = gulp.series([clear, img, fonts, libs, sprite]);
const assetsDev = gulp.series([pug, stylesDev, js]);
const assetsBuild = gulp.series([pug, stylesBuild, js]);
const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assetsBuild]);
export const dev = gulp.series([prepare, assetsDev, live]);
export const deploy = gulp.series([build, ghDeploy]);