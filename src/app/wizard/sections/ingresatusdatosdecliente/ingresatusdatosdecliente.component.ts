import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
<<<<<<< HEAD
import { ServiceGeneralService } from '../../service-general.service';
=======
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
@Component({
  selector: 'app-ingresatusdatosdecliente',
  templateUrl: './ingresatusdatosdecliente.component.html',
  styleUrls: ['./ingresatusdatosdecliente.component.css']
})
export class IngresatusdatosdeclienteComponent implements OnInit {
  
  frmData!: FormGroup;
  today = new Date();
  pipe = new DatePipe('en-US');
<<<<<<< HEAD
  submitted = false;

  constructor(
    private pFormBuilder: FormBuilder,
    private serviceGeneralService:ServiceGeneralService
=======

  constructor(
    private pFormBuilder: FormBuilder,
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
<<<<<<< HEAD
      idcpaterno: ['', Validators.required],
      idcmaterno: ['', Validators.required],
      idcnombres: ['', Validators.required],
      idctipodocumento: ['', Validators.required],
      idcnrodocumento: ['', Validators.required],
      idcfechanacimiento: ['', Validators.required],
      idccorreo: ['', [Validators.required, Validators.email]],
      idcteloficina: ['', Validators.required],
      idcteldomicilio: ['', Validators.required],
      idctelcelular: ['', Validators.required],
      idcgradoinstruccion: ['', Validators.required],
      idcdomicilio: ['', Validators.required],
      idcdepartamento: ['', Validators.required],
      idcprovincia: ['', Validators.required],
      idcdistrito: ['', Validators.required],
      idcfecharegistro: [  this.pipe.transform(this.today, 'dd/MM/YYYY'), Validators.required],
      idclugarnacimiento: ['', Validators.required],
      idcnacionalidad: ['', Validators.required],
      idcpaisdomicilio: ['', Validators.required],
      idcpaisresidencia: ['', Validators.required],
      idctipodomiciliado: ['', Validators.required],
      idcprofesionuocupacion: ['', Validators.required],
      idccentrolaboral: ['', Validators.required],
      idccargo: ['', Validators.required],
      idctiemposervicio: ['', Validators.required],
      idcestadocivil: ['', Validators.required],
      idcnombreconyuge: [''],
      idctipodocumentoconyuge: [''],
      idcnrodocumentoconyuge: [''],
      idcregimenpatrimonialconyuge: [''],
      idcnropartidaconyuge: [''],
      idcactuaporcuentapropia: [true, Validators.required],
      idcacuentadequienactua: [''],
      idcacuentadequienactuanombreyapellido: [''],
      idcacuentadequienactuanropartidaregistral: [''],
      idcacuentadequienactuatipodocumento: [''],
      idcacuentadequienactuanrodocumento: ['']
    })
  }
  get f() { return this.frmData.controls; }

  remoValidatorEstadoCivil(){

    const idcestadocivil = this.frmData.get('idcestadocivil') as FormGroup;
    const idcnombreconyuge = this.frmData.get('idcnombreconyuge') as FormGroup;
    const idctipodocumentoconyuge = this.frmData.get('idctipodocumentoconyuge') as FormGroup;
    const idcnrodocumentoconyuge = this.frmData.get('idcnrodocumentoconyuge') as FormGroup;
    const idcregimenpatrimonialconyuge = this.frmData.get('idcregimenpatrimonialconyuge') as FormGroup;
    const idcnropartidaconyuge = this.frmData.get('idcnropartidaconyuge') as FormGroup;
    const selectedValue = idcestadocivil.value;
    if(selectedValue == 'casado'){
      idcnombreconyuge.setValidators(Validators.required);
      idcnombreconyuge.updateValueAndValidity;
      idctipodocumentoconyuge.setValidators(Validators.required);
      idctipodocumentoconyuge.updateValueAndValidity;
      idcnrodocumentoconyuge.setValidators(Validators.required);
      idcnrodocumentoconyuge.updateValueAndValidity;
      idcregimenpatrimonialconyuge.setValidators(Validators.required);
      idcregimenpatrimonialconyuge.updateValueAndValidity;
      idcnropartidaconyuge.setValidators(Validators.required);
      idcnropartidaconyuge.updateValueAndValidity;
    } else {
      idcnombreconyuge.clearValidators();
      idcnombreconyuge.updateValueAndValidity;
      idctipodocumentoconyuge.clearValidators();
      idctipodocumentoconyuge.updateValueAndValidity;
      idcnrodocumentoconyuge.clearValidators();
      idcnrodocumentoconyuge.updateValueAndValidity;
      idcregimenpatrimonialconyuge.clearValidators();
      idcregimenpatrimonialconyuge.updateValueAndValidity;
      idcnropartidaconyuge.clearValidators();
      idcnropartidaconyuge.updateValueAndValidity;
    }
  }
  remoValidatorCuentaPropia() {
    const idcactuaporcuentapropia = this.frmData.get('idcactuaporcuentapropia') as FormGroup;
    const idcacuentadequienactua = this.frmData.get('idcacuentadequienactua') as FormGroup;
    const idcacuentadequienactuanombreyapellido = this.frmData.get('idcacuentadequienactuanombreyapellido') as FormGroup;
    const idcacuentadequienactuanropartidaregistral = this.frmData.get('idcacuentadequienactuanropartidaregistral') as FormGroup;
    const idcacuentadequienactuatipodocumento = this.frmData.get('idcacuentadequienactuatipodocumento') as FormGroup;
    const idcacuentadequienactuanrodocumento = this.frmData.get('idcacuentadequienactuanrodocumento') as FormGroup;

    const selectedValue = idcactuaporcuentapropia.value;
    if(selectedValue){
      idcacuentadequienactua.clearValidators();
      idcacuentadequienactua.updateValueAndValidity;
      idcacuentadequienactuanombreyapellido.clearValidators();
      idcacuentadequienactuanombreyapellido.updateValueAndValidity;
      idcacuentadequienactuanropartidaregistral.clearValidators();
      idcacuentadequienactuanropartidaregistral.updateValueAndValidity;
      idcacuentadequienactuatipodocumento.clearValidators();
      idcacuentadequienactuatipodocumento.updateValueAndValidity;
      idcacuentadequienactuanrodocumento.clearValidators();
      idcacuentadequienactuanrodocumento.updateValueAndValidity;
    } else {
      idcacuentadequienactua.setValidators(Validators.required);
      idcacuentadequienactua.updateValueAndValidity;
      idcacuentadequienactuanombreyapellido.setValidators(Validators.required);
      idcacuentadequienactuanombreyapellido.updateValueAndValidity;
      idcacuentadequienactuanropartidaregistral.setValidators(Validators.required);
      idcacuentadequienactuanropartidaregistral.updateValueAndValidity;
      idcacuentadequienactuatipodocumento.setValidators(Validators.required);
      idcacuentadequienactuatipodocumento.updateValueAndValidity;
      idcacuentadequienactuanrodocumento.setValidators(Validators.required);
      idcacuentadequienactuanrodocumento.updateValueAndValidity;
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.frmData.invalid) {
      console.log('invalid')
      return;
    }
    console.log('validado')
    this.serviceGeneralService.servicioGeneralObservableData = {
      tabmostrar: 2
    }
=======
      idcpaterno: [null, Validators.required],
      idcmaterno: [null, Validators.required],
      idcnombres: [null, Validators.required],
      idctipodocumento: [null, Validators.required],
      idcnrodocumento: [null, Validators.required],
      idcfechanacimiento: [null, Validators.required],
      idccorreo: [null, Validators.required],
      idcteloficina: [null, Validators.required],
      idcteldomicilio: [null, Validators.required],
      idctelcelular: [null, Validators.required],
      idcgradoinstruccion: [null, Validators.required],
      idcdomicilio: [null, Validators.required],
      idcdepartamento: [null, Validators.required],
      idcprovincia: [null, Validators.required],
      idcdistrito: [null, Validators.required],
      idcfecharegistro: [  this.pipe.transform(this.today, 'dd/MM/YYYY'), Validators.required],
      idclugarnacimiento: [null, Validators.required],
      idcnacionalidad: [null, Validators.required],
      idcpaisdomicilio: [null, Validators.required],
      idcpaisresidencia: [null, Validators.required],
      idctipodomiciliado: [null, Validators.required],
      idcprofesionuocupacion: [null, Validators.required],
      idccentrolaboral: [null, Validators.required],
      idccargo: [null, Validators.required],
      idctiemposervicio: [null, Validators.required],
      idcestadocivil: [null, Validators.required],
      idcnombreconyuge: [null, Validators.required],
      idctipodocumentoconyuge: [null, Validators.required],
      idcnrodocumentoconyuge: [null, Validators.required],
      idcregimenpatrimonialconyuge: [null, Validators.required],
      idcnropartidaconyuge: [null, Validators.required],
      idcactuaporcuentapropia: [null, Validators.required],
      idcacuentadequienactua: [null, Validators.required],
      idcacuentadequienactuanombreyapellido: [null, Validators.required],
      idcacuentadequienactuanropartidaregistral: [null, Validators.required],
      idcacuentadequienactuatipodocumento: [null, Validators.required],
      idcacuentadequienactuanrodocumento: [null, Validators.required]
    })
  }
  onSubmit() {
    console.log(1)
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
  }

}
