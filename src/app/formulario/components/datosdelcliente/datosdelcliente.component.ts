import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosdelcliente',
  templateUrl: './datosdelcliente.component.html',
  styleUrls: ['./datosdelcliente.component.css']
})
export class DatosdelclienteComponent implements OnInit {
  datosCliente: any = {
    estadoCivil: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
