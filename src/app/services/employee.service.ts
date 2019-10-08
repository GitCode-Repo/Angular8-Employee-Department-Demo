import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from 'src/app/models/employee-model';
import {Observable} from 'rxjs';


import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  formData: Employee;

  readonly APIUrl = "http://192.168.8.102:90/api";

  getEmpList(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.APIUrl + '/Employee');
  }

  // addEmployee(dep: Employee)
  // {
  //   return this.http.post(this.APIUrl + '/Employee',dep);
  // }

  // updateEmployee (dep: Employee)
  // {
  //   return this.http.put(this.APIUrl + '/Employee',dep);
  // }

  // deleteEmployee(id: number){
  //   debugger;
  //   return this.http.delete(this.APIUrl + '/Employee/' + id);
  // }

  private _listners =new Subject<any>();
  listen(): Observable<any>
  {
    return this._listners.asObservable();
  }
  filter(filterBy: string)
  {
    this._listners.next(filterBy);
  }
}
