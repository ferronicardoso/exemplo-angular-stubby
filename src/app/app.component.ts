import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Employee } from '../app/class/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exemplo-angular-stubby';
  ServerUrl = environment.serverUrl;
  employeeList: Employee[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchEmployeeList();
  }

  fetchEmployeeList(){
    const url = this.ServerUrl + '/api/employees/list';
    this.http.get(url).subscribe((response: Employee[]) => {
      this.employeeList = response;
      console.log(this.employeeList);
    });
  }
}
