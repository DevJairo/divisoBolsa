import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IngresatusdatosdeclienteComponent } from './sections/ingresatusdatosdecliente/ingresatusdatosdecliente.component';
import { DatosparatuoperatividadComponent } from './sections/datosparatuoperatividad/datosparatuoperatividad.component';
import { DatosadicionalesComponent } from './sections/datosadicionales/datosadicionales.component';
import { SuscuentasbancariasComponent } from './sections/suscuentasbancarias/suscuentasbancarias.component';
import { PoliticasycondicionesComponent } from './sections/politicasycondiciones/politicasycondiciones.component';
import { IndexComponent } from './sections/index/index.component';


@NgModule({
  declarations: [
    IngresatusdatosdeclienteComponent,
    DatosparatuoperatividadComponent,
    DatosadicionalesComponent,
    SuscuentasbancariasComponent,
    PoliticasycondicionesComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    IngresatusdatosdeclienteComponent,
    DatosparatuoperatividadComponent,
    DatosadicionalesComponent,
    SuscuentasbancariasComponent,
    PoliticasycondicionesComponent
  ]
})
export class WizardModule { }
