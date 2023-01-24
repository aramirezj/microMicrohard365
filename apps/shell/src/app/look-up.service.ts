import { getManifest } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { PluginOptions, CustomManifest, CustomRemoteConfig } from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class LookUpService {

 

  lookup():PluginOptions[] {
    const manifest:CustomManifest = getManifest<CustomManifest>();
    const plugins:PluginOptions[] = [];
    for(const key of Object.keys(manifest)){
      const entry:CustomRemoteConfig = manifest[key];
      if(manifest[key].typeExport === 'COMPONENT'){
        plugins.push({
          type:'module',
          remoteEntry:entry.remoteEntry,
          displayName: entry.displayName,
          componentName: entry.titleName,
          exposedModule: entry.exposed
        })
      }
    }
    return plugins;
  }
}
