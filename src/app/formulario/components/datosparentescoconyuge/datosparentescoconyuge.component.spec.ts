import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosparentescoconyugeComponent } from './datosparentescoconyuge.component';

describe('DatosparentescoconyugeComponent', () => {
  let component: DatosparentescoconyugeComponent;
  let fixture: ComponentFixture<DatosparentescoconyugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosparentescoconyugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosparentescoconyugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
