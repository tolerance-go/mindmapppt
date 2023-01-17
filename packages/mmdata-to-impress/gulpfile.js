const gulp = require('gulp')
const minify = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const through = require('through2')
const sass = require('sass')

// a custom pipeable step to transform Sass to CSS
function compileSass() {
   return through.obj((vinylFile, encoding, callback) => {
      const transformedFile = vinylFile.clone()

      sass.render(
         {
            data: transformedFile.contents.toString(),
            includePaths: ['styles/', 'styles/themes/template'],
         },
         (err, result) => {
            if (err) {
               console.log(vinylFile.path)
               console.log(err.formatted)
            } else {
               transformedFile.extname = '.css'
               transformedFile.contents = result.css
               callback(null, transformedFile)
            }
         },
      )
   })
}

gulp.task('css-themes', () => {
   const p = gulp
      .src(['./styles/themes/source/*.{sass,scss}'])
      .pipe(compileSass())
      .pipe(autoprefixer())

   if (process.env.NODE_ENV !== 'development') {
      p.pipe(minify({ compatibility: 'ie9' }))
   }

   return p.pipe(gulp.dest('./dist/themes'))
})

gulp.task('css-core', () => {
   const p = gulp
      .src(['./styles/impress.scss'])
      .pipe(compileSass())
      .pipe(autoprefixer())

   if (process.env.NODE_ENV !== 'development') {
      p.pipe(minify({ compatibility: 'ie9' }))
   }
   return p.pipe(gulp.dest('./dist'))
})

gulp.task('build', gulp.parallel('css-themes', 'css-core'))

gulp.task('dev', () =>
   gulp.watch(
      [
         'styles/themes/source/*.{sass,scss}',
         'styles/themes/template/*.{sass,scss}',
         'styles/*.scss',
      ],
      { ignoreInitial: false },
      gulp.series('build'),
   ),
)
