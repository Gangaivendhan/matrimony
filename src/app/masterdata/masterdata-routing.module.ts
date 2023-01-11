import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarComponent } from './star/star.component';
import { CastComponent } from './cast/cast.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { MotherTongueComponent } from './mother-tongue/mother-tongue.component';
import { CurrencyComponent } from './currency/currency.component';
import { AnnualIncomeComponent } from './annual-income/annual-income.component';
import { EducationComponent } from './education/education.component';
import { BrokerComponent } from './broker/broker.component';
const routes: Routes = [
  {path:"star",component:StarComponent}, 
  {path:"cast",component:CastComponent},
  {path:"mother-tongue",component:MotherTongueComponent},
  {path:"currency",component:CurrencyComponent},
  {path:"annual-income",component:AnnualIncomeComponent},
  {path:"education",component:EducationComponent},
  {path:"broker",component:BrokerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), ContentHeaderModule],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
