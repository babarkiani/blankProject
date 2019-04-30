import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  temp;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.display().then(res => {
      // console.log(res);
      this.temp = JSON.parse(res);
      console.log(this.temp.home_banners_data);
      this.data = this.temp.home_banners_data
      this.api.data = this.data
    }).catch(err => {
      console.log(err);
    })
  }
  gotoDetails(id) {
    console.log(id + 'clicked')
    this.router.navigateByUrl('details/' + id)
  }
}

