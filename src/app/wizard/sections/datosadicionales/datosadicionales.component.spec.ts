import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosadicionalesComponent } from './datosadicionales.component';

describe('DatosadicionalesComponent', () => {
  let component: DatosadicionalesComponent;
  let fixture: ComponentFixture<DatosadicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosadicionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosadicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
