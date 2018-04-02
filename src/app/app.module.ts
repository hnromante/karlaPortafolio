import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// =============================================================================
// RUTAS
// =============================================================================
import { app_routing } from './app.routes';
// =============================================================================
// SERVICIOS
// =============================================================================
import { InformacionService } from './services/informacion.service';
// =============================================================================
// ANGULAR
// =============================================================================
import {HttpModule} from "@angular/http";
// =============================================================================
// COMPONENTES
// =============================================================================
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { InfoTrabajoComponent } from './components/info-trabajo/info-trabajo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TrabajosService } from './services/trabajos.service';
import { BuscarComponent } from './components/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    InfoTrabajoComponent,
    ContactoComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
    
  ],
  providers: [InformacionService, TrabajosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
