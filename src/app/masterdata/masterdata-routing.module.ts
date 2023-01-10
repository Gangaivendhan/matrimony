import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarComponent } from './star/star.component';
import { CastComponent } from './cast/cast.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
const routes: Routes = [
  {path:"star",component:StarComponent,
  data: { animation: 'table' }},
 
  {path:"cast",component:CastComponent,
  data: { animation: 'layout' }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes), ContentHeaderModule],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
