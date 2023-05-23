import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit {
  cargando : boolean = true;
  cosasLindas : any = [];
  
  constructor(private img : ImagenService,private db : DbService) { 
    this.db.traerCosas('lindas').subscribe(res => {
      //console.log(res);
      this.cosasLindas = res.sort(function(a, b) {
        return b.id - a.id;
      });
      this.cargando = false;
    })
  }

  ngOnInit() {
  }

  async nuevaFoto(){
    this.cargando = true;
    await this.img.subirImagen('lindas').then((res) => {
      //console.log('subio');      
      if(res){
        this.cargando = false
      }
    });
  }

}
