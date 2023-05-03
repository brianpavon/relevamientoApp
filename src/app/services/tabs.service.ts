import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private tabVisibility: boolean = true;

  constructor() { }

  setTabVisibility(value: boolean) {
    this.tabVisibility = value;
  }

  getTabVisibility() {
    return this.tabVisibility;
  }
}
