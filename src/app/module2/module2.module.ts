import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCComponent } from './comp-c/comp-c.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompCComponent],
  exports: [CompCComponent] // We make the component visible outside the module 2 scope.
})
export class Module2Module { }
