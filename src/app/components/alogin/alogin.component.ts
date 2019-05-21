import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AloginService } from 'src/app/services/alogin/alogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit, OnDestroy {
  companyEmail = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  constructor(private aloginService: AloginService, private router: Router ) { }

  ngOnInit() {
    this.loginResponse = this.aloginService.$loginStatus.subscribe(status => {
      // do something with status here
      if (status === 200) {
        this.router.navigateByUrl('aportal');
      } else {
        // set status to lastStatus to display appripraite error mesage
        this.lastStatus = status;
      }
    });
  }


ngOnDestroy(): void {
  if (this.loginResponse) {
    this.loginResponse.unsubscribe();
  }
}

submit() {
  this.aloginService.alogin(this.companyEmail, this.password);

}
}