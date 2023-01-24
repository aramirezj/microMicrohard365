const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'exser',

  exposes: {
    './Module': 'apps/exser/src/app/remote-entry/entry.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});


/** exposes: {
    './Module': 'apps/worldpreso/src/app/remote-entry/entry.module.ts',
    './Button': 'apps/worldpreso/src/app/button/button.component.ts'
  }
 * 
 */