import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})

export class Exercice1Component implements OnInit {
numexo : number;
color : string ='white';
changeBgcolor(color :string):void{
this.color=color;
}
  constructor() {
  this.numexo=1;

  
   }

  ngOnInit() {


  }

}
