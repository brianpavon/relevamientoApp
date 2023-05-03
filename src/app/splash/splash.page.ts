import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router : Router,private tabService : TabsService) {
    setTimeout(() => {
      this.router.navigateByUrl('login',{replaceUrl:true});
      this.tabService.setTabVisibility(true);
    }, 2000);
  }

  ngOnInit() {
  }

}
