import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AprovidersService } from 'src/app/services/aproviders/aproviders.service';

@Component({
  selector: 'app-aproviders',
  templateUrl: './aproviders.component.html',
  styleUrls: ['./aproviders.component.css']
})
export class AprovidersComponent implements OnInit {
  public show = false;
  public buttonName: any = 'Expand';
  private viewStatusSubject = new Subject<number>();
  response: Subscription;
  public $viewStatus = this.viewStatusSubject.asObservable();
  lastStatus = 200;
  //splitCache = sessionStorage.getItem('cache').split(' ');
  companyID = 0;
  //companyName = this.splitCache[1];

  constructor(private aproviderService: AprovidersService) { }

  ngOnInit() {
    this.response = this.$viewStatus.subscribe(status => {
      if (status === 200) {
        alert('Insurance Chosen');
      } else {
        this.lastStatus = status;
      }
    });
  }
  ngOnDestroy() {
    if(this.response) {
      this.response.unsubscribe();
    }
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Collapse';
    } else {
      this.buttonName = 'Expand';
  }
  }
  
  aProviderSelection(providerId) {
    this.aproviderService.aProviderSelection(this.companyID, providerId);
  }
}
