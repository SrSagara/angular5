import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  allowDrop(event: any) : void{
    event.preventDefault();
  }

  drag(event: any): void{
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(event: any): void{
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  
}
