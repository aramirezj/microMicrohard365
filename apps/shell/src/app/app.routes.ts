import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Route[] = [
  {
    path: 'super',
    component: WebComponentWrapper,
    data:{
      type:'module',
      remoteEntry:'http://localhost:4202/remoteEntry.js',
      exposedModule:'./web-components',
      elementName:'super-component'
    } as WebComponentWrapperOptions
  },
  {
    path: '',
    component: NxWelcomeComponent,
  }
];
