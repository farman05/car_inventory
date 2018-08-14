import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../service/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }

  signout() {
      this.api.deleteToken();
      this.router.navigate(['']);
  }

}
