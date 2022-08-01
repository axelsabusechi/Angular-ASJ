import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "./componentes/navbar/navbar.component";
import {CarouselComponent} from "./componentes/carousel/carousel.component";
import {FooterComponent} from "./componentes/footer/footer.component";
import {OfertasComponent} from "./componentes/ofertas/ofertas.component";
import {ContactoComponent} from "./componentes/contacto/contacto.component";
import {TablaTallesComponent} from "./componentes/tabla-talles/tabla-talles.component";

const routes: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'tablaTalles', component: TablaTallesComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
