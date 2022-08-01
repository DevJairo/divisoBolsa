import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { ServiceGeneralService, DataGlobal } from '../../service-general.service';
// import { bootstrap } from 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
=======

>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
<<<<<<< HEAD
  data$: Observable<DataGlobal>
  constructor(
    serviceGeneralService: ServiceGeneralService
  ) { 
    this.data$ = serviceGeneralService.servicioGeneralObservable;
  }

  ngOnInit(): void {
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> 302e6bffab1de378302881f09d681165e9b69c79
  }

}
