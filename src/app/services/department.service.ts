import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from 'src/app/models/department-model';
import {Observable} from 'rxjs';


import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  formData: Department;

  readonly APIUrl = "http://192.168.8.102:90/api";
  //readonly APIUrl = "http://localhost:11233/api";
  //readonly APIUrl = "http://localhost/web.api/api";
  //Test

  getDepList(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this.APIUrl + '/department');
  }

  addDepartment (dep: Department)
  {
    return this.http.post(this.APIUrl + '/Department',dep);
  }

  updateDepartment (dep: Department)
  {
    return this.http.put(this.APIUrl + '/Department',dep);
  }

  deleteDepartment(id: number){
    debugger;
    return this.http.delete(this.APIUrl + '/Department/' + id);
  }

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
