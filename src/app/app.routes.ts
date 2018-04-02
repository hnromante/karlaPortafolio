
import { RouterModule, Routes } from '@angular/router';
import {PortafolioComponent, 
        AboutComponent,
        InfoTrabajoComponent,
        ContactoComponent} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'inicio', component: PortafolioComponent },
    { path: 'acerca', component: AboutComponent },
    { path: 'trabajo/:id', component: InfoTrabajoComponent },
    { path: 'contacto', component: ContactoComponent },
];


export const app_routing = RouterModule.forRoot (app_routes, {useHash:true});
