import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BannerResponse } from 'src/app/shared/models/banner-response';
import { CompanyDetails } from 'src/app/shared/models/company-details';
import { forkJoin, finalize } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  banners?: BannerResponse;
  details?: CompanyDetails
  errorMessage?: string
  isLoading = true;
  activeBanner = 0;

  constructor(private http: HttpClient) { }

  getBannerDetails() {
    const companyDetails$ = this.http.get<CompanyDetails>('http://localhost:1337/api/company-detail');

    const banners$ = this.http.get<BannerResponse>(
      'http://localhost:1337/api/hero-banners',
      {
        params: {
          populate: 'banner',
        },
      }
    )
      .pipe(finalize(() => this.isLoading = false))

    forkJoin([companyDetails$, banners$]).subscribe(([businessHours, banners]) => {
      console.log(companyDetails$, banners$);
      this.details = businessHours
      this.banners = banners
    })
  }

  ngOnInit(): void {
    this.getBannerDetails()
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
