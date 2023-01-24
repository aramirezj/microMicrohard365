import { getManifest } from '@angular-architects/module-federation';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LookUpService } from './look-up.service';
import { CustomManifest, CustomRemoteConfig, PluginOptions } from './utils/config';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  remotes: CustomRemoteConfig[] = [];
  router: Router = inject(Router);

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  lookUpService: LookUpService = inject(LookUpService);

  async ngOnInit() {
    const manifest: CustomManifest = getManifest<CustomManifest>();
    this.plugins = this.lookUpService.lookup();

    // TODO: Move this to an APP_INITIALIZER
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(manifest);
    console.log(this.remotes)


  }

  add(plugin: PluginOptions) {
    console.log(plugin)
    this.workflow.push(plugin);
  }

  toggle(){
    this.showConfig = !this.showConfig;
  }


}
