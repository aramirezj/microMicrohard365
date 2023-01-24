import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginProxyComponent } from './plugin-proxy/plugin-proxy.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginProxyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
