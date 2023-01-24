import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginOptions } from '../utils/config';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-plugin-proxy',
  standalone: true,
  imports: [],
  template: `<ng-container #placeholder></ng-container>`
})
export class PluginProxyComponent {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;

  @Input() options!: PluginOptions;

  async ngAfterViewInit() {
    console.log(this.viewContainer)
    console.log(this.options)
    this.viewContainer.clear();
    const Component = await loadRemoteModule(this.options).then(m => m[this.options.componentName]);
    this.viewContainer.createComponent(Component);
  }
}
