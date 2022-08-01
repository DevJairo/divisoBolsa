import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IngresatusdatosdeclienteComponent } from './sections/ingresatusdatosdecliente/ingresatusdatosdecliente.component';
import { DatosparatuoperatividadComponent } from './sections/datosparatuoperatividad/datosparatuoperatividad.component';
import { DatosadicionalesComponent } from './sections/datosadicionales/datosadicionales.component';
import { SuscuentasbancariasComponent } from './sections/suscuentasbancarias/suscuentasbancarias.component';
import { PoliticasycondicionesComponent } from './sections/politicasycondiciones/politicasycondiciones.component';
import { IndexComponent } from './sections/index/index.component';
<<<<<<< HEAD
import { PdfComponent } from './pdf/pdf.component';
import { PepComponent } from './pdf/components/pep/pep.component';
import { IntermediacionComponent } from './pdf/components/intermediacion/intermediacion.component';
import { DeclaracionComponent } from './pdf/components/declaracion/declaracion.component';
=======
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79


@NgModule({
  declarations: [
    IngresatusdatosdeclienteComponent,
    DatosparatuoperatividadComponent,
    DatosadicionalesComponent,
    SuscuentasbancariasComponent,
    PoliticasycondicionesComponent,
<<<<<<< HEAD
    IndexComponent,
    PdfComponent,
    PepComponent,
    IntermediacionComponent,
    DeclaracionComponent
=======
    IndexComponent
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
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
