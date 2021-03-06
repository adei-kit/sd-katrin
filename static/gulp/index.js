var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
    require('./tasks/' + task);
});

gulp = require('gulp');
Ractive = require('ractive');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
    gulp.watch('src/css/**', ['copy']);
    gulp.watch('src/js/**', ['browserify']);
});
