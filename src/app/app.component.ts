import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';
import { TrabajosService } from './services/trabajos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public _is:InformacionService,
               public _ts:TrabajosService){

  }
}
