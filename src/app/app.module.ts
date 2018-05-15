import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { DraganddropformobileComponent } from './draganddropformobile/draganddropformobile.component';
import { ShowlistComponent } from './showlist/showlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DraganddropComponent,
    DraganddropformobileComponent,
    ShowlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
