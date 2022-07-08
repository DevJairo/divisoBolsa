import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface DataGlobal {
  inversionistaInstitucional: Boolean | null;
  contratoIntermediacionCompleto: Boolean | null;
  tabmostrar: Number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  private servicioGeneralPrivate: BehaviorSubject<DataGlobal> = new BehaviorSubject<DataGlobal>({
    inversionistaInstitucional: false,
    contratoIntermediacionCompleto: false,
    tabmostrar: 1
  });
  
  getData() {
    return this.servicioGeneralPrivate.getValue()
  }

  get servicioGeneralObservable(){
    return this.servicioGeneralPrivate.asObservable();
  }

  set servicioGeneralObservableData(data:any){
    console.log(data)
    this.servicioGeneralPrivate.next({...this.getData(), ...data});
  }


}
