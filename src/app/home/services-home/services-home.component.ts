import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from 'src/app/shared/models/services-response';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {

  service?: ServiceResponse
  constructor(private http: HttpClient) {

  }

  getServices() {
    this.http.get<ServiceResponse>('http://localhost:1337/api/service', {
      params: {
        populate: 'services.image'
      }
    }).subscribe(response => {
      console.log(response);
      this.service = response

    })
  }

  ngOnInit(): void {
    this.getServices()
  }
}
