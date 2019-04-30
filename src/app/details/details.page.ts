import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id;
  details;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.details = this.api.data.filter(a => {
      return a.home_banner_id == this.id;
    })
    console.log(this.details)
  }

}
