import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Name:string='ashutosh tiwari';
  amount:Number=5679;
  DOB=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
