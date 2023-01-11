import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarComponent } from './star/star.component';
import { ReligionComponent } from './religion/religion.component';
import { RaasiStarComponent } from './raasi-star/raasi-star.component';

const routes: Routes = [
  {path:"star",component:StarComponent},
  {path:"religion",component:ReligionComponent},
  {path:"raasi-star",component:RaasiStarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
