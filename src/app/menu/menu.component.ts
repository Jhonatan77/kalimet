import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  modo:String = screen.width<=1024?"over":"side"
  abierto: boolean = screen.width<=1024?false:true
  movil: boolean = screen.width<=1024?true:false
  pc: boolean =screen.width<=1024?false:true
  verM: boolean = false;
  verV: boolean = false;

  verMant(){
    this.verM = !this.verM;
  }

  verVentas(){
    this.verV = !this.verV;
  }

  ngOnInit() {
  }

}
