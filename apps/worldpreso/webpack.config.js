const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'worldpreso',

  exposes: {
    './Module': 'apps/worldpreso/src/app/remote-entry/entry.module.ts',
    './Button': 'apps/worldpreso/src/app/button/button.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings:['@aramirezj/auth-lib']

});


/** exposes: {
    './Module': 'apps/worldpreso/src/app/remote-entry/entry.module.ts',
    './Button': 'apps/worldpreso/src/app/button/button.component.ts'
  }
 * 
 */