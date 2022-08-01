import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresatusdatosdeclienteComponent } from './ingresatusdatosdecliente.component';

describe('IngresatusdatosdeclienteComponent', () => {
  let component: IngresatusdatosdeclienteComponent;
  let fixture: ComponentFixture<IngresatusdatosdeclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresatusdatosdeclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresatusdatosdeclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
