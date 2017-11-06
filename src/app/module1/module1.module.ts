import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { Module2Module } from '../module2/module2.module';

@NgModule({
  imports: [
    CommonModule,
    Module2Module
  ],
  declarations: [CompAComponent, CompBComponent],
  exports: [CompAComponent, CompBComponent]
})
export class Module1Module { }
