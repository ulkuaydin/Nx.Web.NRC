import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BannerComponent } from './views/landing-page/banner.component';
import { MobileComponent } from './views/landing-page/mobile.component';
import { InfoComponent } from './views/landing-page/info.component';
import { DashboardComponent } from './views/landing-page/dashboard.component';
import { FooterComponent } from './shared/footer.component';
import { BuyComponent } from './views/landing-page/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    BannerComponent,
    MobileComponent,
    InfoComponent,
    DashboardComponent,
    FooterComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
