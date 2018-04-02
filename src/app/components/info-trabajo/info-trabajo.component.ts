import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajosService } from '../../services/trabajos.service';

@Component({
  selector: 'app-info-trabajo',
  templateUrl: './info-trabajo.component.html'
})
export class InfoTrabajoComponent {

  trabajo:any = undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute,
              private _ts:TrabajosService) {
    route.params.subscribe(
      parametros=>{
        // console.log(parametros);
        // console.log(parametros['id']);
        _ts.cargar_trabajo(parametros['id']).subscribe(res=>{
          this.trabajo = res.json(); 
          this.cod = parametros['id'];
          console.log(this.trabajo);
        })
      }
    )
   }


  
}
