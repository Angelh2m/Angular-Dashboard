import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './layouts/home/home.component';
import { MessagesComponent } from './layouts/messages/messages.component';
import { RecommendationsComponent } from './layouts/recommendations/recommendations.component';
import { BillingComponent } from './layouts/billing/billing.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { InboxMessageComponent } from './components/inbox-message/inbox-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    MessagesComponent,
    RecommendationsComponent,
    BillingComponent,
    ProfileComponent,
    InboxMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
