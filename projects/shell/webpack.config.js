const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "worldpreso": "http://localhost:4201/remoteEntry.js",
  },

  //If we want to every project has the exact dependency
  /**
   * shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
   */
  //To be able to specify certain dependencys
  shared:
    share({
      "@angular/core": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
      "@angular/common": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
      "@angular/common/http": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
      "@angular/router": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
    })
});
