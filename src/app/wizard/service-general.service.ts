import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
export interface DataGlobal {
  tabmostrar: Number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  private servicioGeneralPrivate: BehaviorSubject<DataGlobal> = new BehaviorSubject<DataGlobal>({
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
    this.servicioGeneralPrivate.next(data);
  }
  
}
