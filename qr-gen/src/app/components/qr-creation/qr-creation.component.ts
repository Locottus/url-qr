import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-creation',
  templateUrl: './qr-creation.component.html',
  styleUrls: ['./qr-creation.component.css']
})
export class QrCreationComponent implements OnInit {


  value : string = "";
  size : number = 300;
  //darkColor:number  = 0x37CF;
  errorCorrectionLevel : string[] = ["L","M","Q","H"];
  margin : number = 1;


  constructor() { }

  ngOnInit(): void {
  }

}
