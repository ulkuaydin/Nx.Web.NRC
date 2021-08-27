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
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
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
    AppRoutingModule,
    CommonModule,
    ClickOutsideModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
