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

  alogin(companyEmail: string, password: string): void {
    const payload = {
      companyEmail: companyEmail,
      password: password
    };

    this.httpClient.post('http://localhost:8080/ProjectTwoa_V1/alogin', payload, {
        observe: 'response'
      }).subscribe(response => {
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
