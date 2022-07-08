import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioGeneralService, DataGlobal } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-contratointermediacion',
  templateUrl: './contratointermediacion.component.html',
  styleUrls: ['./contratointermediacion.component.css']
})
export class ContratointermediacionComponent implements OnInit {
  data$: Observable<DataGlobal>
  constructor(private servicioGeneralService: ServicioGeneralService) { 
    this.data$ = servicioGeneralService.servicioGeneralObservable;
  }

  ngOnInit(): void {
  }

}
