import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { DatosdelcontratoComponent } from './components/datosdelcontrato/datosdelcontrato.component';
import { DatosdelclienteComponent } from './components/datosdelcliente/datosdelcliente.component';
import { CuentasbancariasComponent } from './components/cuentasbancarias/cuentasbancarias.component';
import { IndexComponent } from './pages/index/index.component';
import { ContratointermediacionComponent } from './pages/contratointermediacion/contratointermediacion.component';
import { DeclaracionjuradaComponent } from './pages/declaracionjurada/declaracionjurada.component';
import { FichapepComponent } from './pages/fichapep/fichapep.component';
import { DataoperatividadclienteComponent } from './components/dataoperatividadcliente/dataoperatividadcliente.component';
import { AutorizacionComponent } from './components/autorizacion/autorizacion.component';
import { OtrospaisesconobligaciontributariaComponent } from './components/otrospaisesconobligaciontributaria/otrospaisesconobligaciontributaria.component';
import { DatosgeneralesComponent } from './components/datosgenerales/datosgenerales.component';
import { DatosparentescodeclaranteComponent } from './components/datosparentescodeclarante/datosparentescodeclarante.component';
import { DatosparentescoconyugeComponent } from './components/datosparentescoconyuge/datosparentescoconyuge.component';
import { ParticipacionjuridicaComponent } from './components/participacionjuridica/participacionjuridica.component';
import { DeclaracionjuradainversionistainstitucionalComponent } from './pages/declaracionjuradainversionistainstitucional/declaracionjuradainversionistainstitucional.component';
import { DatosinversionistainstitucionalComponent } from './components/datosinversionistainstitucional/datosinversionistainstitucional.component';



@NgModule({
  declarations: [
    TabComponent,
    DatosdelcontratoComponent,
    DatosdelclienteComponent,
    CuentasbancariasComponent,
    IndexComponent,
    ContratointermediacionComponent,
    DeclaracionjuradaComponent,
    FichapepComponent,
    DataoperatividadclienteComponent,
    AutorizacionComponent,
    OtrospaisesconobligaciontributariaComponent,
    DatosgeneralesComponent,
    DatosparentescodeclaranteComponent,
    DatosparentescoconyugeComponent,
    ParticipacionjuridicaComponent,
    DeclaracionjuradainversionistainstitucionalComponent,
    DatosinversionistainstitucionalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TabComponent,
    DatosdelcontratoComponent,
    DatosdelclienteComponent,
    CuentasbancariasComponent,
    ContratointermediacionComponent,
    DeclaracionjuradaComponent,
    FichapepComponent,
    OtrospaisesconobligaciontributariaComponent,
    DatosgeneralesComponent,
    DatosparentescoconyugeComponent,
    DeclaracionjuradainversionistainstitucionalComponent,
    DatosinversionistainstitucionalComponent
  ]
})
export class FormularioModule { }
