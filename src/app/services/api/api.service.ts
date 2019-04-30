import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  display() {
    let data = {
      home_banner_status: 1,
      api_key: '40bd001563085fc35165329ea1ff5c5ecbdbbeef'
    }

    const body = new HttpParams()
      .set('home_banner_status', '0')
      .set('api_key', '40bd001563085fc35165329ea1ff5c5ecbdbbeef')
    return this.httpClient.post('http://itsdigi.com/ionic/load-home-banners.php',
      body, { 'responseType': 'text' })
      .pipe(first())
      .toPromise();
  }

  getUser() {
    let body = new HttpParams()
      .set('user_email', 'mabkiani@itsdigi.com')
      .set('user_password', 'password')
      .set('user_status', '1')
      .set('api_key', '40bd001563085fc35165329ea1ff5c5ecbdbbeef')
    return this.httpClient.post('http://itsdigi.com/ionic/load-login-user.php',
      body, { 'responseType': 'text' })
      .pipe(first())
      .toPromise();
  }

  edit(this) {


    const body = new HttpParams()
      .set('home_banner_status', '0')
      .set('home_banner_slug', this)
      .set('api_key', '40bd001563085fc35165329ea1ff5c5ecbdbbeef')
    return this.httpClient.post('http://itsdigi.com/ionic/edit-home-banners.php',
      body, { 'responseType': 'text' })
      .pipe(first())
      .toPromise();
  }
}

