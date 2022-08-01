import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IngresatusdatosdeclienteComponent } from './sections/ingresatusdatosdecliente/ingresatusdatosdecliente.component';
import { DatosparatuoperatividadComponent } from './sections/datosparatuoperatividad/datosparatuoperatividad.component';
import { DatosadicionalesComponent } from './sections/datosadicionales/datosadicionales.component';
import { SuscuentasbancariasComponent } from './sections/suscuentasbancarias/suscuentasbancarias.component';
import { PoliticasycondicionesComponent } from './sections/politicasycondiciones/politicasycondiciones.component';
import { IndexComponent } from './sections/index/index.component';
import { PdfComponent } from './pdf/pdf.component';
import { PepComponent } from './pdf/components/pep/pep.component';
import { IntermediacionComponent } from './pdf/components/intermediacion/intermediacion.component';
import { DeclaracionComponent } from './pdf/components/declaracion/declaracion.component';


@NgModule({
  declarations: [
    IngresatusdatosdeclienteComponent,
    DatosparatuoperatividadComponent,
    DatosadicionalesComponent,
    SuscuentasbancariasComponent,
    PoliticasycondicionesComponent,
    IndexComponent,
    PdfComponent,
    PepComponent,
    IntermediacionComponent,
    DeclaracionComponent
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
