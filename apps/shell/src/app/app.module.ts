import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { PluginProxyComponent } from './plugin-proxy/plugin-proxy.component';
import { APP_ROUTES } from './app.routes';
import { AuthComponent, UserComponent } from '@aramirezj/auth-lib';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    AuthComponent,
    UserComponent,
    PluginProxyComponent,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
