const sass = require('node-sass');

sass.render({
  file: 'sass/main.scss',
  outputStyle: 'compressed',
  outFile: 'css/style.css'
}, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Compiled successfully!');
  }
});