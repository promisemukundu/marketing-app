import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BannerResponse } from 'src/app/shared/models/banner-response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  banners?: BannerResponse;
  activeBanner = 0;

  constructor(private http: HttpClient) { }


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

  public setActiveBanner(direction: number): void {
    const newBanner = this.activeBanner + direction;

    if (newBanner < 0) {
      //@ts-ignore
      this.activeBanner = this.banners?.data?.length - 1;
      return;
    }

    //reset to 0 if we have gone above the number of banners index
    if (newBanner > this.banners!.data.length - 1) {
      this.activeBanner = 0;

      return;
    }

    this.activeBanner = newBanner;
  }
}
