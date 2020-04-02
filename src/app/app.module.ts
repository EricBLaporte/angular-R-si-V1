import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SourcesGIECComponent } from './sources-giec/sources-giec.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, MainpageComponent, SourcesGIECComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
