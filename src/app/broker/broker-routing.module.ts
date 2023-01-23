import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserlistComponent } from './add-userlist/add-userlist.component';

const routes: Routes = [
  {
    path:'add-user',component:AddUserComponent
  },
  {
    path:'add-userlist',component:AddUserlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }
