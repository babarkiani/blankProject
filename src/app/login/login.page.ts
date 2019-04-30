import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user;
  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.api.getUser().then(res => {
      console.log(res)
      this.user = JSON.parse(res);
      console.log(this.user);
    }).catch(error => {
      console.log(error)
    })
    this.router.navigate(['home']);
  }

}
