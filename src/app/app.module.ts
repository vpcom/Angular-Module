import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { ServiceAService } from './module1/service-a.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Module1Module // Allows us to see the Module 1 in the root scope
  ],
  providers: [ServiceAService], // for services only, makes then visible (and everywhere), so it is better to make it available in the root module for clarity
  bootstrap: [AppComponent]
})
export class AppModule { }
