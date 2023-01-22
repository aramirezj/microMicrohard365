import { loadManifest } from '@angular-architects/module-federation';
//Loadmanifest accepts a second parameter to skip remote entries, its to prevent loading the entry points.

//Function setManifest allows to directly set the manifest, for example if u retrieve for somewhere else instead a whole json
//file

//loadRemoteEntry, to load directly de remote entry points instead of the manifest
/**
 * Promise.all([
loadRemoteEntry({
type: 'module',
remoteEntry: 'http://localhost:4201/remoteEntry.js'
}),
loadRemoteEntry({
type: 'module',
remoteEntry: 'http://localhost:4202/remoteEntry.js'
})
 ])
 .catch(err => console.error(err))
 .then(_ => import('./bootstrap'))
 .catch(err => console.error(err));

 */

 
loadManifest('./assets/mf.manifest.json').catch(err => console.log(err))
	.then(_ => import('./bootstrap')
		.catch(err => console.error(err)));

