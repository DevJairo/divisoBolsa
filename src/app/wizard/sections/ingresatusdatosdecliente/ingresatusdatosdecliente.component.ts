import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiceGeneralService } from '../../service-general.service';
@Component({
  selector: 'app-ingresatusdatosdecliente',
  templateUrl: './ingresatusdatosdecliente.component.html',
  styleUrls: ['./ingresatusdatosdecliente.component.css']
})
export class IngresatusdatosdeclienteComponent implements OnInit {
  
  frmData!: FormGroup;
  today = new Date();
  pipe = new DatePipe('en-US');
  submitted = false;

  constructor(
    private pFormBuilder: FormBuilder,
    private serviceGeneralService:ServiceGeneralService
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
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
  }

}
