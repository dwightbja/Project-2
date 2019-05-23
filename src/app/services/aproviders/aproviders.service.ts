import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprovidersService {
  private resolveStatusSubject = new Subject<number>();
  public $resolveStatus = this.resolveStatusSubject.asObservable();
  public peteDental = '../../../assets/PetesTotalCare/dental1.pdf';
  public peteVision = '../../../assets/PetesTotalCare/vision1.pdf';
  public peteMedical = '../../../assets/PetesTotalCare/medical1.pdf';
  public armandMedical = '../../../assets/ArmandGroup/medical2.pdf';
  public armandVision = '../../../assets/ArmandGroup/vision2.pdf';
  public armandDental = '../../../assets/ArmandGroup/dental2.pdf';
  public willDental = '../../../assets/WillCross/dental3.pdf';
  public willMedical = '../../../assets/WillCross/medical3.pdf';
  public willVision = '../../../assets/WillCross/vision3.pdf';
  public retirement = '../../../assets/PetesTotalCare/retirement1.pdf';
  private selection = new Array<any>();
  constructor(private httpClient: HttpClient) { }
  aProviderSelection(companyID: number, providerId: number, description: string, typeId: number) {
    const payload = {
      companyID: companyID,
      providerId: providerId,
      typeId: typeId,
      description: description
    };
    return this.selection.push(payload);
  }
  Submit() {
    this.httpClient.post('http://localhost:8080/ProjectTwoa_V1/alogin', this.selection,{
      observe: 'response'
    }).subscribe(response => {
      this.resolveStatusSubject.next(200);
    }, err => {
      this.resolveStatusSubject.next(err.status);
    });
  }


  getPeteDental() {
    return this.peteDental;
  }
  getPeteVision() {
    return this.peteVision;
  }
  getPeteHealth() {
    return this.peteMedical;
  }
  getArmandMedical() {
    return this.armandMedical;
  }
  getArmandVision() {
    return this.armandVision;
  }
  getArmandDental() {
    return this.armandDental;
  }
  getWillDental() {
    return this.willDental;
  }
  getWillMedical() {
    return this.willMedical;
  }
  getWillVision() {
    return this.willVision;
  }
  getRetirement() {
    return this.retirement;
  }




  
}
