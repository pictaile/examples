import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { CompOneComponent } from './dynamic/comp-one/comp-one.component';
import { CompTwoComponent } from './dynamic/comp-two/comp-two.component';
import {AddHostComponent} from "./directives/add-host.component";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CompOneComponent,
    CompTwoComponent,
    AddHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [ CompOneComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
