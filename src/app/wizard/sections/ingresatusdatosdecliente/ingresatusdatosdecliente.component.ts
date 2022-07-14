import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-ingresatusdatosdecliente',
  templateUrl: './ingresatusdatosdecliente.component.html',
  styleUrls: ['./ingresatusdatosdecliente.component.css']
})
export class IngresatusdatosdeclienteComponent implements OnInit {
  
  frmData!: FormGroup;
  today = new Date();
  pipe = new DatePipe('en-US');

  constructor(
    private pFormBuilder: FormBuilder,
  ) { }

  async ngOnInit() {
    this.frmData = this.pFormBuilder.group({
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
  }

}
