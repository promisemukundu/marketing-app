import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessResponse } from '../models/business-response';
import { CompanyDetails } from '../models/company-details';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class FooterComponent implements OnInit {
  hours?: BusinessResponse
  details?: CompanyDetails

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    const businessHours$ = this.http.get<BusinessResponse>('http://localhost:1337/api/business-hours');
    const companyDetails$ = this.http.get<CompanyDetails>('http://localhost:1337/api/company-detail');

    forkJoin([
      businessHours$,
      companyDetails$
    ]).subscribe(([businessHours, companyDetails]) => {
      console.log(businessHours, companyDetails);
      this.hours = businessHours
      this.details = companyDetails

    })
  }
}
