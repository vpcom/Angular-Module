import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCComponent } from './comp-c/comp-c.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompCComponent],
  exports: [CompCComponent]
})
export class Module2Module { }
