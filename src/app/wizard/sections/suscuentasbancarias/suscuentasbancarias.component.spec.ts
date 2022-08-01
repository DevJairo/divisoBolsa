import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscuentasbancariasComponent } from './suscuentasbancarias.component';

describe('SuscuentasbancariasComponent', () => {
  let component: SuscuentasbancariasComponent;
  let fixture: ComponentFixture<SuscuentasbancariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscuentasbancariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscuentasbancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
