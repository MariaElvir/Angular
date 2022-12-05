import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHijoComponent } from './tabla-hijo.component';

describe('TablaHijoComponent', () => {
  let component: TablaHijoComponent;
  let fixture: ComponentFixture<TablaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
