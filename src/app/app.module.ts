import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroBannerComponent,
    SearchBarComponent,
    VehicleCardComponent,
    VehicleListComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
