import { loadManifest } from '@angular-architects/module-federation';
import { AppModule } from "./app/app.module";
import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(AppModule, {
    appType: 'shell',
    production: false
});
loadManifest('./assets/mf.manifest.json').catch(err => console.log(err))
	.then(() => import('./bootstrap')
		.catch(err => console.error(err)));
