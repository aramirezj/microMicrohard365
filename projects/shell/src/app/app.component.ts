import { getManifest } from '@angular-architects/module-federation';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
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

  async ngOnInit() {
    const manifest:CustomManifest = getManifest<CustomManifest>();
    console.log(manifest)
   
    // TODO: Move this to an APP_INITIALIZER
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(manifest);
    console.log(this.remotes)


  }
}
