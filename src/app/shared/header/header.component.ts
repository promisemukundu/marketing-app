import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyDetails } from '../models/company-details';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) { }

  details?: CompanyDetails

  getDetails() {
    this.http.get<CompanyDetails>('http://localhost:1337/api/company-detail').subscribe(response => {
      console.log(response);
      this.details = response
      console.log(this.details);



    })
  }

  ngOnInit(): void {
    this.getDetails()
  }
}
