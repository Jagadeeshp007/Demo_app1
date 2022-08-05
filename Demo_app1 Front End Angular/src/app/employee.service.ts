import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  constructor(private http: HttpClient) { }

  createEmployee(employee: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
  }
}
