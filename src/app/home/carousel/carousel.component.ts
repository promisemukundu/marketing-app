import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BannerResponse } from 'src/app/shared/models/banner-response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private http: HttpClient) { }

  banners?: BannerResponse

  getBanner() {
    this.http
      .get<BannerResponse>('http://localhost:1337/api/hero-banners?populate=banner')
      .subscribe((response) => {
        console.log(response);
        this.banners = response
      });
  }

  ngOnInit(): void {
    this.getBanner();
  }
}
