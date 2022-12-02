import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelamainComponent } from './escuelamain.component';

describe('EscuelamainComponent', () => {
  let component: EscuelamainComponent;
  let fixture: ComponentFixture<EscuelamainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuelamainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscuelamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
