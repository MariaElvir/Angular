import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad9Component } from './actividad9.component';

describe('Actividad9Component', () => {
  let component: Actividad9Component;
  let fixture: ComponentFixture<Actividad9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actividad9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
