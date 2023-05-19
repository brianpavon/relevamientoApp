import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent  implements OnInit {

  userLogged : any;

  constructor(public auth : AuthService) { 
    this.auth.obtenerUsuarioLogueado().subscribe(user =>{      
      this.userLogged = user      
    })
  }

  ngOnInit() {}

}
