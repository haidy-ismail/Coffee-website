import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPagesComponent } from './pages/services-pages/services-pages.component';
import { MenuComponent } from './component/menu/menu.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { TeamMemberPageComponent } from './pages/team-member-page/team-member-page.component';
import { MenuPagesComponent } from './pages/menu-pages/menu-pages.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'about',component:AboutPageComponent},
  {path:'services',component:ServicesPagesComponent},
  {path:'menu',component:MenuPagesComponent},
  {path:'contact',component:ContactPagesComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'team',component:TeamMemberPageComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
