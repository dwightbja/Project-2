import { Component, OnInit } from '@angular/core';
import { AregisterService } from 'src/app/services/aresgister/aregister.service';

@Component({
  selector: 'app-aregister',
  templateUrl: './aregister.component.html',
  styleUrls: ['./aregister.component.css']
})
export class AregisterComponent implements OnInit {
 firstName = '';
  lastName = '';
  email = '';
  registerAttemptSucceeded = undefined;
  constructor(private aregisterService: AregisterService) { }

  ngOnInit() {
  }
  submit() {
    // call the signupService signup method
    this.aregisterService.aregister(this.email, this.firstName, this.lastName).subscribe( result => {
      this.registerAttemptSucceeded = true;
    }, error => {
      this.registerAttemptSucceeded = false;
    });
  }

}
