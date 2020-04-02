import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, MainpageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
