import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasycondicionesComponent } from './politicasycondiciones.component';

describe('PoliticasycondicionesComponent', () => {
  let component: PoliticasycondicionesComponent;
  let fixture: ComponentFixture<PoliticasycondicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasycondicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticasycondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
