import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
numbers:number[]=[];

public color:string="brown";

public obj={
  "red":true,
  "style":true
}

  constructor() { 
  }

  ngOnInit(): void {
     
  }
  
  display(){

    for(let i=0;i<8;i++)
    {
      this.numbers.push(i);
    }
  }

}
