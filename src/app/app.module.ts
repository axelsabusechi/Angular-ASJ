import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { TablaTallesComponent } from './componentes/tabla-talles/tabla-talles.component';
import { OfertasComponent } from './componentes/ofertas/ofertas.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoComponent,
    TablaTallesComponent,
    OfertasComponent,
    CarouselComponent,
    FooterComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
