import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GIECComponent } from './giec.component';
import { appRoutingModule } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule,appRoutingModule ],
  declarations: [ AppComponent, HelloComponent, GIECComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
