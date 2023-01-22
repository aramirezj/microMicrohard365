import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'worldpreso',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'worldpreso',
      exposedModule: './Module'
    }).then(m=>m.WorldpresoModule)
  },
  {
    path: 'exser',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'exser',
      exposedModule: './Module'
    }).then(m=>m.ExserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
