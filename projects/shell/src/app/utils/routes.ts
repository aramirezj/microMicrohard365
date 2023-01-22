import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { CustomManifest } from './config';

/**
 * Function that takes the manifest loaded and maps it to build the type routes that contains
 * the routes for each micro application using the information given in the manifest
 * @param options Manifest
 * @returns Routes of the microApps
 */
export function buildRoutes(options: CustomManifest): Routes {
    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];
        return {
            path: entry.routePath,
            loadChildren: () =>
                loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: entry.exposedModule
                })
                    .then(m => m[entry.ngModuleName])
        }
    });

    return [...APP_ROUTES, ...lazyRoutes];
}
