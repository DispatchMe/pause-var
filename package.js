Package.describe({
  name: 'pause-var',
  summary: 'A reactive var that allows you to pause reactivity.'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('tracker', 'web');

  api.addFiles('pause_var.js', 'web');

  api.export('PauseVar', 'web');
});
