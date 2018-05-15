import { Component, OnInit } from '@angular/core';
import { ARRAY_OF_THING } from './mock-thing';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  things = ARRAY_OF_THING;

  constructor() { }

  ngOnInit() {
  }

}
