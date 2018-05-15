import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeuse',
  templateUrl: './pipeuse.component.html',
  styleUrls: ['./pipeuse.component.css']
})
export class PipeuseComponent implements OnInit {

  aNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  addOne() { this.aNumber = this.aNumber + 1;}

}
