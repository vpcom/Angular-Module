import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { Module2Module } from '../module2/module2.module';
import { ServiceAService } from './service-a.service';

@NgModule({
  imports: [
    CommonModule,
    Module2Module
  ],
  declarations: [CompAComponent, CompBComponent], // declarationa are in local scope, or private
  exports: [CompAComponent, CompBComponent] // But thanks to the exports, we can see them everywhere.
})
export class Module1Module { }
