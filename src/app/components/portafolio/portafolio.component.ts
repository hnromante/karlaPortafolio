import { Component} from '@angular/core';
import { TrabajosService } from '../../services/trabajos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor(private _ts:TrabajosService) { }

}
