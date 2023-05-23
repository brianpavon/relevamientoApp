import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {

  cargando : boolean = true;
  cosasFeas : any = []

  constructor(private img : ImagenService,private db : DbService) { 
    this.db.traerCosas('feas').subscribe(res => {
      console.log(res);
      this.cargando = false
    })
  }

  ngOnInit() {
  }

  async nuevaFoto(){
    this.cargando = true;
    await this.img.subirImagen('feas').then((res) => {
      console.log('subio');
      if(res){
        this.cargando = false
      }else{
        this.cargando = false
        console.log('error');        
      }
    });
  }

}
