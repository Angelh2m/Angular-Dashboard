import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './layouts/navigation/navigation.component';
// import { HeaderComponent } from './layouts/header/header.component';
// import { MainComponent } from './layouts/main/main.component';
// import { HomeComponent } from './layouts/home/home.component';
// import { MessagesComponent } from './layouts/messages/messages.component';
// import { RecommendationsComponent } from './layouts/recommendations/recommendations.component';
// import { BillingComponent } from './layouts/billing/billing.component';
// import { ProfileComponent } from './layouts/profile/profile.component';
// import { InboxMessageComponent } from './components/inbox-message/inbox-message.component';
// import { LoginStateComponent } from './components/login-state/login-state.component';

import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './util/interceptor/token.interceptor';
import { HeaderComponent } from './layouts/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    DashboardComponent,
    // HeaderComponent,
    // MainComponent,
    // HomeComponent,
    // MessagesComponent,
    // RecommendationsComponent,
    // BillingComponent,
    // ProfileComponent,
    // InboxMessageComponent,
    // LoginStateComponent
    // NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
