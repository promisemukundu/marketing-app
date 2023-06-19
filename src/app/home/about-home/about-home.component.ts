import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutResponse } from 'src/app/shared/models/about-response';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {

  about?: AboutResponse;
  constructor(private http: HttpClient) { }

  getAbout() {
    this.http.get<AboutResponse>('http://localhost:1337/api/about-us?populate=cards.image').subscribe(response => {
      console.log(response);
      this.about = response

    })
  }

  ngOnInit(): void {
    this.getAbout()
  }
}
