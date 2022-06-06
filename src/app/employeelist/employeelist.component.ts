import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../models/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
   public employees:any=[];

  constructor(private employeeser:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.employeeser.getEmployees();
  }

}
