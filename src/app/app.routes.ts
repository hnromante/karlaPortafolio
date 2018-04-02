
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import {PortafolioComponent, 
        AboutComponent,
        InfoTrabajoComponent,
        ContactoComponent} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'inicio', component: PortafolioComponent },
    { path: 'acerca', component: AboutComponent },
    { path: 'trabajo/:id', component: InfoTrabajoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'buscar/:param', component: BuscarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const app_routing = RouterModule.forRoot (app_routes, {useHash:true});
