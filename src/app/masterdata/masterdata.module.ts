import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MasterdataRoutingModule } from './masterdata-routing.module';
import { StarComponent } from './star/star.component';
import { ReligionComponent } from './religion/religion.component';
import {MatTableModule} from '@angular/material/table';
import { TableModule } from 'app/main/tables/table/table.module';
import { DatatablesModule } from 'app/main/tables/datatables/datatables.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreCardModule } from "../../@core/components/core-card/core-card.module";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RaasiStarComponent } from './raasi-star/raasi-star.component';
import { CastComponent } from './cast/cast.component';
import { MotherTongueComponent } from './mother-tongue/mother-tongue.component';
import { CurrencyComponent } from './currency/currency.component';
import { AnnualIncomeComponent } from './annual-income/annual-income.component';
import { EducationComponent } from './education/education.component';
import { BrokerComponent } from './broker/broker.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    StarComponent,
    ReligionComponent,
    RaasiStarComponent,
    CastComponent,
    MotherTongueComponent,
    CurrencyComponent,
    AnnualIncomeComponent,
    EducationComponent,
    BrokerComponent
  ],
  imports: [
    CommonModule,
    MasterdataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    NgxDatatableModule,
    CsvModule,
    CoreCardModule,
    DatatablesModule,
    TableModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    NgbModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class MasterdataModule { }
