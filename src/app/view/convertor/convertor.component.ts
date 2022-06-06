import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  public number:number=0;
  public unitF:number=0;
  public unitC:number=0;
  constructor() { }

  ngOnInit(): void {
  }
}
