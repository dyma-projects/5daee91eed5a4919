import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
texts: string[];
  constructor() { }

  ngOnInit() {
  	this.texts=['un','deux','trois'];
  }

}
