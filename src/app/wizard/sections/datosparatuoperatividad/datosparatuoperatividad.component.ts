import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-datosparatuoperatividad',
  templateUrl: './datosparatuoperatividad.component.html',
  styleUrls: ['./datosparatuoperatividad.component.css']
})
export class DatosparatuoperatividadComponent implements OnInit {

  frmData!: FormGroup;
  constructor(
    private pFormBuilder: FormBuilder,
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
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
      dpoinversionistainstitucional: [false, Validators.required],
      dpoporcentaje:['100']
      
    })
  }

  onSubmit() {

  }
}
