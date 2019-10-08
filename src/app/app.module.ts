import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule, MatIconModule,MatButtonModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component'; 

import {DepartmentService} from 'src/app/services/department.service';
//import {EmployeeService} from 'src/app/services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EditDepComponent,
    ShowDepComponent,
    AddDepComponent,
    AddEmpComponent,
    EditEmpComponent,
    ShowEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
  ],
  //providers: [DepartmentService,EmployeeService],
  providers: [DepartmentService],
  bootstrap: [AppComponent],
  entryComponents: [AddDepComponent,EditDepComponent]
})
export class AppModule { }
