import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from '../layouts/navigation/navigation.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { MainComponent } from '../layouts/main/main.component';
import { MessagesComponent } from '../layouts/messages/messages.component';
import { RecommendationsComponent } from '../layouts/recommendations/recommendations.component';
import { BillingComponent } from '../layouts/billing/billing.component';
import { ProfileComponent } from '../layouts/profile/profile.component';
import { InboxMessageComponent } from '../components/inbox-message/inbox-message.component';
import { LoginStateComponent } from '../components/login-state/login-state.component';
import { LoginComponent } from '../layouts/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    MessagesComponent,
    RecommendationsComponent,
    BillingComponent,
    ProfileComponent,
    InboxMessageComponent,
    LoginStateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    MessagesComponent,
    RecommendationsComponent,
    BillingComponent,
    ProfileComponent,
    InboxMessageComponent,
    LoginStateComponent
  ]
})

export class DashboardModule { }
