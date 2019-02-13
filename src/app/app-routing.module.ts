import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { MessagesComponent } from './layouts/messages/messages.component';
import { RecommendationsComponent } from './layouts/recommendations/recommendations.component';
import { BillingComponent } from './layouts/billing/billing.component';
import { ProfileComponent } from './layouts/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'home' } },
  { path: 'messages', component: MessagesComponent, data: { title: 'messages' } },
  { path: 'recommendations', component: RecommendationsComponent, data: { title: 'recommendations' } },
  { path: 'billing', component: BillingComponent, data: { title: 'billing' } },
  { path: '', component: ProfileComponent, data: { title: 'profile' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
