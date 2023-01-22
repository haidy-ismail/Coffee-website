import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoverComponent } from './component/cover/cover.component';
import { AboutUSComponent } from './component/about-us/about-us.component';
import { OurServicesComponent } from './component/our-services/our-services.component';
import { SepecialOfferComponent } from './component/sepecial-offer/sepecial-offer.component';
import { MenuComponent } from './component/menu/menu.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TeamMemberComponent } from './component/team-member/team-member.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPagesComponent } from './pages/services-pages/services-pages.component';
import { MenuPagesComponent } from './pages/menu-pages/menu-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { TeamMemberPageComponent } from './pages/team-member-page/team-member-page.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    AboutUSComponent,
    OurServicesComponent,
    SepecialOfferComponent,
    MenuComponent,
    ContactUsComponent,
    TeamMemberComponent,
    AboutPageComponent,
    ServicesPagesComponent,
    MenuPagesComponent,
    ContactPagesComponent,
    ReservationComponent,
    TeamMemberPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
