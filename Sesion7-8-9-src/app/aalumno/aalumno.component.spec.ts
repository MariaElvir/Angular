import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AalumnoComponent } from './aalumno.component';

describe('AalumnoComponent', () => {
  let component: AalumnoComponent;
  let fixture: ComponentFixture<AalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
