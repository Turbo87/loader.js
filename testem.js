module.exports = {
  framework: 'qunit',
  src_files: [
    'node_modules/heimdalljs/dist/heimdalljs.iife.js',
    'lib/loader/loader.js',
    'tests/all.js'
  ],
  before_tests: './build.js',
  test_page: 'tests/index.html?hidepassed',
  launch_in_dev: [
    'PhantomJS',
    'Chrome'
  ],
  launch_in_ci: [
    'PhantomJS'
  ]
};
