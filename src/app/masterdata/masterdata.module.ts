import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    MasterdataRoutingModule
  ]
})
export class MasterdataModule { }
