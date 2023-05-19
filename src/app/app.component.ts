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
  
  constructor(private router : Router) {  
    this.initializeApp();
  }
  
  initializeApp(){    
    this.router.navigateByUrl('splash');
  }
}
