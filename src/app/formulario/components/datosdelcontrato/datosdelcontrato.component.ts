import { Component, Input, OnInit } from '@angular/core';
import { ServicioGeneralService } from 'src/app/services/servicio-general.service';
import { Datosdelcontrato } from '../../interfaces/datosdelcontrato';

@Component({
  selector: 'app-datosdelcontrato',
  templateUrl: './datosdelcontrato.component.html',
  styleUrls: ['./datosdelcontrato.component.css']
})
export class DatosdelcontratoComponent implements OnInit {
  contrato: Datosdelcontrato = {
    fecha: '',
    tipoPropiedad: '',
    porcentaje: '',
    tipoFirma: '',
    vinculado: '',
    inversionistaInstitucional: null
  }

  constructor(private servicioGeneralService: ServicioGeneralService) {
  }


  handleCheck(val: Boolean) {
    this.servicioGeneralService.servicioGeneralObservableData = {
      inversionistaInstitucional: val
    }
  }

  validate() {
    let valid = (this.contrato.fecha == '' || this.contrato.tipoPropiedad == '' || this.contrato.porcentaje == '' || this.contrato.tipoFirma == '' || this.contrato.vinculado == '' || this.contrato.inversionistaInstitucional == null)
    let valid2 = (this.contrato.fecha == '' || this.contrato.tipoPropiedad == '' || this.contrato.vinculado == '' || this.contrato.inversionistaInstitucional == null)
    if (this.contrato.tipoPropiedad == 'copropiedad' ? valid : valid2) {
      return false
    }
    return true
  }

  guardar() {
    if (this.validate()) {
      this.servicioGeneralService.servicioGeneralObservableData = {
        contratoIntermediacionCompleto: true,
        tabmostrar: 2
      }
    } else {
      this.servicioGeneralService.servicioGeneralObservableData = {
        contratoIntermediacionCompleto: false
      }
    }
  }

  ngOnInit(): void {
  }

}
