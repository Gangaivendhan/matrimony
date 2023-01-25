import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { CoreCommonModule } from '@core/common.module';


import { DashboardService } from 'app/main/dashboard/dashboard.service';

import { AnalyticsComponent } from 'app/main/dashboard/analytics/analytics.component';
import { EcommerceComponent } from 'app/main/dashboard/ecommerce/ecommerce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ProfileService } from '../pages/profile/profile.service';
import { TopMatchesComponent } from './top-matches/top-matches.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true
};
const routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin], animation: 'danalytics' },
    resolve: {
      css: DashboardService,
    }
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: DashboardService
    },
    data: { animation: 'decommerce' }
  },
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    // resolve: {
    //   css: DashboardService
    // },
  },
  {
    path: 'top-matches',
    component: TopMatchesComponent,
  }
];

@NgModule({
  declarations: [AnalyticsComponent, EcommerceComponent, DashboardComponent, TopMatchesComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    SwiperModule,
    
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    ProfileService
  ],
  exports: [EcommerceComponent],
})
export class DashboardModule {}
