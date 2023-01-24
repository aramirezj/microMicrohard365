import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginProxyComponent } from './plugin-proxy.component';

describe('PluginProxyComponent', () => {
  let component: PluginProxyComponent;
  let fixture: ComponentFixture<PluginProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PluginProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
