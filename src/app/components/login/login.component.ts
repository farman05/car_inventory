 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  reponseData;
  error: boolean;
  msg;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

   get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
  });

  this.chkdLogin();
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      this.api.postData('user/login', this.loginForm.value).subscribe((response) => {
          this.reponseData = response;
          if (this.reponseData.success) {
            this.api.setToken(this.reponseData.result);
            this.router.navigate(['manufacturer']);
          } else {
            this.error = true;
            this.msg = this.reponseData.msg;
            setTimeout(function() {
              this.success = false;
              this.error = false;
              this.disabled = false;
          }.bind(this), 3000);
          }
      });
    }
  }

  chkdLogin() {
    if (this.api.getToken()) {
      this.router.navigate(['manufacturer']);
      return true;
    }
    return false;
  }

}
