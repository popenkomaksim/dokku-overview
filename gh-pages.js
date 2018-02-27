const ghpages = require('gh-pages');
ghpages.publish('dist', {}, function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Done.")
});
