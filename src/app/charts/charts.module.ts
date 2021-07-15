import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvD3Module } from 'ng2-nvd3';

import { StackedComponent } from './stacked/stacked.component';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module
  ],
  declarations: [ StackedComponent ],
  exports: [ StackedComponent ]
})
export class ChartsModule { }
