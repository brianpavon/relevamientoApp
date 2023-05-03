import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabsService } from './services/tabs.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userLogged : any;
  constructor(private router : Router,public tabService : TabsService,public auth : AuthService) {
    this.auth.obtenerUsuarioLogueado().subscribe(user =>{      
      this.userLogged = user      
    })
    this.initializeApp();
  }
  initializeApp(){
    this.tabService.setTabVisibility(false);
    this.router.navigateByUrl('splash');
  }
}
