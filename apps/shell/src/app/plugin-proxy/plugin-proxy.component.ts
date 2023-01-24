import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from '../../utils/config';

@Component({
  selector: 'aramirezj-plugin-proxy',
  standalone: true,
  imports: [],
  template: `<ng-container #placeholder></ng-container>`
})
export class PluginProxyComponent implements AfterViewInit {
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
