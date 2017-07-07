(function() {

  // mapa informuje program ładujący system, gdzie ma szukać 
  var map = {
    'app': 'app',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };
  // Pakiety podpowiada ładując system jak ładować, gdy nie ma nazwy pliku i / lub bez rozszerzenia
  var packages = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})();
