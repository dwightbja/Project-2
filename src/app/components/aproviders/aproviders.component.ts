import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aproviders',
  templateUrl: './aproviders.component.html',
  styleUrls: ['./aproviders.component.css']
})
export class AprovidersComponent implements OnInit {
public show = false;
public buttonName: any = 'Expand';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
    this.buttonName = 'Collapse';
    } else {
    this.buttonName = 'Expand';
    }
  }
}
