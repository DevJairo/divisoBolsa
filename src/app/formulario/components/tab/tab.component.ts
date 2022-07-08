import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioGeneralService, DataGlobal } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  data$: Observable<DataGlobal>
  constructor(servicioGeneralService: ServicioGeneralService) {
    this.data$ = servicioGeneralService.servicioGeneralObservable;
   }

  ngOnInit(): void {

  }

}
