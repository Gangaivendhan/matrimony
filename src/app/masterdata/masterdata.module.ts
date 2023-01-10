import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MasterdataRoutingModule } from './masterdata-routing.module';
import { StarComponent } from './star/star.component';
import {MatTableModule} from '@angular/material/table';
import { TableModule } from 'app/main/tables/table/table.module';
import { DatatablesModule } from 'app/main/tables/datatables/datatables.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { DatatablesComponent } from 'app/main/tables/datatables/datatables.component';
import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { CoreCardModule } from "../../@core/components/core-card/core-card.module";


@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        CommonModule,
        MasterdataRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        TranslateModule,
        CoreCommonModule,
        ContentHeaderModule,
        CardSnippetModule,
        NgxDatatableModule,
        CsvModule,
        CoreCardModule,
        DatatablesModule, TableModule
    ]
})
export class MasterdataModule { }
