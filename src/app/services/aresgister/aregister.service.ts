import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AregisterService {

  constructor(private httpClient: HttpClient) { }

  aregister(employeeFirstName: string, employeeLastName: string, employeeEmail: string): Observable<any> {
    const payload = {
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeEmail: employeeEmail

    };
    return this.httpClient.post('http://localhost:8080/ProjectTwoa_V1/aregister', payload);
  }
}
