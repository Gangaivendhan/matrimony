import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { StarComponent } from './star/star.component';
import { ReligionComponent } from './religion/religion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
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
// import { DatatablesComponent } from 'app/main/tables/datatables/datatables.component';
// import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { CoreCardModule } from "../../@core/components/core-card/core-card.module";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RaasiStarComponent } from './raasi-star/raasi-star.component';
@NgModule({
  declarations: [
    StarComponent,
    ReligionComponent,
    RaasiStarComponent
  ],
  imports: [
    CommonModule,
    MasterdataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
    // DatatablesComponent,
    // DatatablesService,
    NgbModule,
    MatSlideToggleModule
  ]
})
export class MasterdataModule { }
