import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TrabajosService {

trabajos:any[] = [];
constructor(private http:Http) {
  this.cargar_trabajos();
}
cargando:boolean = true;

// ==========================================================================
// Cargar trabajos
// ==========================================================================

  public cargar_trabajos(){

    this.cargando = true;


    if(this.trabajos.length === 0){
      this.http.get("https://karlafolio.firebaseio.com/trabajos_idx.json")
          .subscribe( res => {
            console.log(res.json());
            this.cargando = false;
          })
    }

  }
}

