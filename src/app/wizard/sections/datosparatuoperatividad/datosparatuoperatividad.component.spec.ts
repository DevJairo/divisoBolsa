import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosparatuoperatividadComponent } from './datosparatuoperatividad.component';

describe('DatosparatuoperatividadComponent', () => {
  let component: DatosparatuoperatividadComponent;
  let fixture: ComponentFixture<DatosparatuoperatividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosparatuoperatividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosparatuoperatividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
