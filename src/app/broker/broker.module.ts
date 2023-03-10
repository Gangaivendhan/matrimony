import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
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
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlertsModule } from 'app/main/extensions/sweet-alerts/sweet-alerts.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrsModule } from 'app/main/extensions/toastr/toastr.module';
import { BrokerRoutingModule } from './broker-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserlistComponent } from './add-userlist/add-userlist.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [
  
    AddUserComponent,
       AddUserlistComponent,
       RequestComponent
  ],
  imports: [
    CommonModule,
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
    ToastrModule.forRoot(),
    BrokerRoutingModule,
    NgSelectModule,
    ToastrModule,
    SweetAlertsModule,
    ToastrsModule 
  ]
})
export class BrokerModule { }
