import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {
  info:any = {};
  cargadaInfoPag:boolean = false;
  cargadaSobreMi:boolean = false;
  sobreMi:any[] =  [];

  constructor(public http:Http) { 

      this.cargarInfo();
      this.cargarSobreMi();
  } 

  public cargarInfo(){
    this.http.get("assets/data/info.pagina.json").
              subscribe(data => { 
                this.info = data.json();
                this.cargadaInfoPag = true;

              })
  }
  public cargarSobreMi(){
    this.http.get("https://karlafolio.firebaseio.com/sobremi.json").
              subscribe(data => { 
                this.sobreMi = data.json();
                console.log(this.sobreMi)
                this.cargadaSobreMi = true;

              })
  }
}
