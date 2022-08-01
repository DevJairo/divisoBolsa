import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { ServiceGeneralService } from '../../service-general.service';
=======
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
@Component({
  selector: 'app-datosparatuoperatividad',
  templateUrl: './datosparatuoperatividad.component.html',
  styleUrls: ['./datosparatuoperatividad.component.css']
})
export class DatosparatuoperatividadComponent implements OnInit {

  frmData!: FormGroup;
  constructor(
    private pFormBuilder: FormBuilder,
<<<<<<< HEAD
    private serviceGeneralService: ServiceGeneralService
=======
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
<<<<<<< HEAD
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
=======
      dpoordenaccesoweb: [null],
      dpoordentelefono: [null],
      dpoordenescrito: [null],
      dpordenotros: [null],
      dpoinvertidoenvalores: [null, Validators.required],
      dporentafija: [null, Validators.required],
      dporentavariable: [null, Validators.required],
      dpoenderivados: [null, Validators.required],
      dpoaccesoaeecc: [null, Validators.required],
      dpoadministracioncartera: [null, Validators.required],
      dpointermediacionmercadoextranjero: [null, Validators.required],
      dpoinversionderivados: [null, Validators.required],
      dpotuperfil: [null, Validators.required],
      dpotipopropiedad: [true, Validators.required],
      dpovinculado: [null, Validators.required],
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
      dpoinversionistainstitucional: [false, Validators.required],
      dpoporcentaje:['100']
      
    })
  }

  onSubmit() {
<<<<<<< HEAD
    this.serviceGeneralService.servicioGeneralObservableData = {
      tabmostrar: 3
    }
  }
  backSection() {
    this.serviceGeneralService.servicioGeneralObservableData = {
      tabmostrar: 1
    }
=======

>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
  }
}
