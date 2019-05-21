import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprovidersService {
  private resolveStatusSubject = new Subject<number>();
  public $resolveStatus = this.resolveStatusSubject.asObservable();
  constructor(private httpClient: HttpClient) { }
 
  aProviderSelection(companyID: number, providerId: number) {
    const payload ={
      companyID: companyID,
      providerId: providerId
    };
    this.httpClient.post('http://localhost:8080/ProjectTwoa_V1/alogin', payload, {
      observe: 'response'
    }).subscribe(response => {
      this.resolveStatusSubject.next(200);
    }, err => {
      this.resolveStatusSubject.next(err.status);
    });
  }
}
