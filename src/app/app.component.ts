import { Component } from '@angular/core';
import {ApiService} from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor(private api: ApiService) {
  }

  ngOnInit() { console.log('sads');
     this.chkLogin(); }

  chkLogin() {
    if (this.api.getToken()) {
      this.isLoggedIn = true;
    }

    return false;
  }
}
