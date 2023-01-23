const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'worldpreso',

  exposes: {
    './Menu': './projects/worldpreso/src/app/worldpreso/menu/menu.component.ts',
    './Module': './projects/worldpreso/src/app/worldpreso/worldpreso.module.ts'

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
