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
      out: function(event, ui) {
          $('#container').addClass('highlighter_focus_out');
          $('#container').removeClass('highlighter_focus_in');
       },    
      over: function(event, ui) {
        $('#container').addClass('highlighter_focus_in');
        $('#container').removeClass('highlighter_focus_out');
      },
      drop: function (event, ui) {
        $(this).empty();
        $( "<span></span>" ).html( ui.draggable.html()).appendTo( this );
        $('#container').addClass('highlighter_focus_out');
        $('#container').removeClass('highlighter_focus_in');
      }
  });
  }
}
