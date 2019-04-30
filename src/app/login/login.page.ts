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
  temp;
  email;
  password;
  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.api.getUser().then(res => {
      console.log(res)
      this.temp = JSON.parse(res);
      this.user = this.temp.login_user_data[0];
      console.log(this.user);
      if (this.user.user_email == this.email) {
        console.log('this')
        this.router.navigate(['home'])
      }
    }).catch(error => {
      console.log(error)
    })


  }

}
