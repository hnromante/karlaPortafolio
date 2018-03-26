
import { RouterModule, Routes } from '@angular/router';
import {PortafolioComponent, 
        AboutComponent,
        InfoTrabajoComponent} from "./components/index.paginas";

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'acerca', component: AboutComponent },
    { path: 'trabajo', component: InfoTrabajoComponent },
];


export const app_routing = RouterModule.forRoot (app_routes, {useHash:true});
