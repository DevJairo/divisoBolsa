import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceGeneralService } from '../../service-general.service';
@Component({
  selector: 'app-datosparatuoperatividad',
  templateUrl: './datosparatuoperatividad.component.html',
  styleUrls: ['./datosparatuoperatividad.component.css']
})
export class DatosparatuoperatividadComponent implements OnInit {

  frmData!: FormGroup;
  constructor(
    private pFormBuilder: FormBuilder,
    private serviceGeneralService: ServiceGeneralService
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
      dpoordenaccesoweb: [''],
      dpoordentelefono: [''],
      dpoordenescrito: [''],
      dpordenotros: [''],
      dpoinvertidoenvalores: ['', Validators.required],
      dporentafija: ['', Validators.required],
      dporentavariable: ['', Validators.required],
      dpoenderivados: ['', Validators.required],
      dpoaccesoaeecc: ['', Validators.required],
      dpoadministracioncartera: ['', Validators.required],
      dpointermediacionmercadoextranjero: ['', Validators.required],
      dpoinversionderivados: ['', Validators.required],
      dpotuperfil: ['', Validators.required],
      dpotipopropiedad: ['', Validators.required],
      dpovinculado: ['', Validators.required],
      dpoinversionistainstitucional: [false, Validators.required],
      dpoporcentaje:['100']
      
    })
  }

  onSubmit() {
    this.serviceGeneralService.servicioGeneralObservableData = {
      tabmostrar: 3
    }
  }
  backSection() {
    this.serviceGeneralService.servicioGeneralObservableData = {
      tabmostrar: 1
    }
  }
}
