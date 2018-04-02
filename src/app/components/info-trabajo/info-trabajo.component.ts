import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-trabajo',
  templateUrl: './info-trabajo.component.html'
})
export class InfoTrabajoComponent {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(
      parametros=>{
        console.log(parametros);
        console.log(parametros['id']);
        
      }
    )
   }


  
}
