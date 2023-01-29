import { getManifest } from '@angular-architects/module-federation';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomManifest, PluginOptions } from '../utils/config';
import { buildRoutes } from '../utils/routes';
import { LookUpService } from './look-up.service';
@Component({
  selector: 'aramirezj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  router: Router = inject(Router);
  lookUpService: LookUpService = inject(LookUpService);

  async ngOnInit() {
    const manifest: CustomManifest = getManifest<CustomManifest>();
    this.plugins = this.lookUpService.lookup();
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
  }

  add(plugin: PluginOptions) {
    console.log(plugin)
    this.workflow.push(plugin);
  }


}
