import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.display().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    this.api.getUser().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

  }
}

