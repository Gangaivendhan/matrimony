import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { StarComponent } from './star/star.component';
import { CastComponent } from './cast/cast.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    StarComponent,
    CastComponent
  ],
  imports: [
    CommonModule,
    MasterdataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule
  ]
})
export class MasterdataModule { }
