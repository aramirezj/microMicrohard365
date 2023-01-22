import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldpresoModule } from './worldpreso/worldpreso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorldpresoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
