import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AloginService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  alogin(companyEmail: string, Password: string): void {
    const payload = {
      userEmail: companyEmail,
      password: Password
    };

    this.httpClient.post('http://localhost:8081/Company/login', payload, {
        observe: 'response'
      }).subscribe(response => {
        this.loginStatusSubject.next(201);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
