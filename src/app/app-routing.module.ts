import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './layouts/messages/messages.component';
import { RecommendationsComponent } from './layouts/recommendations/recommendations.component';
import { BillingComponent } from './layouts/billing/billing.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { IsUserRegisteredGuard } from './util/guard/is-user-registered.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'PatientsDashboardComponent' },
    canActivate: [IsUserRegisteredGuard],
    children: [
      {
        path: 'messages', component: MessagesComponent, data: { title: 'messages' },

      },
      {
        path: 'recommendations', component: RecommendationsComponent, data: { title: 'recommendations' },

      },
      {
        path: 'billing', component: BillingComponent, data: { title: 'billing' },

      },
      {
        path: '', component: ProfileComponent, data: { title: 'profile' },
      },
    ]
  },

  { path: 'login', component: LoginComponent, data: { title: 'login' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
