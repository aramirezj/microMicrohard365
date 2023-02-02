import { DoBootstrap, inject, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SuperComponent } from './super-component/super-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SuperComponent,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {

  injector: Injector = inject(Injector);

  ngDoBootstrap(): void {
    const ce = createCustomElement(SuperComponent, { injector: this.injector });
    customElements.define('super-component', ce);
  }

}
