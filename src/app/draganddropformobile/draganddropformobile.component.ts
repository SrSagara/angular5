import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-draganddropformobile',
  templateUrl: './draganddropformobile.component.html',
  styleUrls: ['./draganddropformobile.component.css']
})
export class DraganddropformobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".draggable").each(function(){
        $(this).draggable({revert:true});
    });
    $("#container").droppable({
      drop: function (event, ui) {
        $(this).empty();
        $( "<span></span>" ).html( ui.draggable.html()).appendTo( this );
      }
  });
  }
}
