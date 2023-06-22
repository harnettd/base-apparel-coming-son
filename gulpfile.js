const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass")(require("sass"));
const cat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const lib = "library.blocks";
const common = "common.blocks";
const dist = "bundles";

cssClean = () => {
    return src(dist + "/*")
        .pipe(src(common + "/*.css"))
        .pipe(clean());
}

cssTranspile = () => {
    return src(common + "/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(common));
}

cssCat = () => {
    return src([lib + "/root.css", lib + "/page.css", lib + "/card-wrapper.css", lib + "/attribution.css"])
        .pipe(src([common + "/page.css", common + "/card.css", common + "/attribution.css"]))
        .pipe(cat("styles.css"))
        .pipe(dest(dist));
}

cssMinify = () => {
    return src(dist + "/styles.css")
        .pipe(rename(dist + "/styles.min.css"))
        .pipe(cleanCSS())
        .pipe(dest("."));
}

exports.cssClean = cssClean;
exports.cssTranspile = cssTranspile;
exports.cssCat = cssCat;
exports.cssMinify = cssMinify;
exports.default = series(cssClean, cssTranspile, cssCat, cssMinify); 