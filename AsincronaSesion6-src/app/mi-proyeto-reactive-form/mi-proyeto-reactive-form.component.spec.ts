import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProyetoReactiveFormComponent } from './mi-proyeto-reactive-form.component';

describe('MiProyetoReactiveFormComponent', () => {
  let component: MiProyetoReactiveFormComponent;
  let fixture: ComponentFixture<MiProyetoReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiProyetoReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiProyetoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
