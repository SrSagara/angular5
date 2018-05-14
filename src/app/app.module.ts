import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';

@NgModule({
  declarations: [
    AppComponent,
    DraganddropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
