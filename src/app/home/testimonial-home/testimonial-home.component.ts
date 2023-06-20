import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestimonialResponse } from 'src/app/shared/models/testimonial-response';

@Component({
  selector: 'app-testimonial-home',
  templateUrl: './testimonial-home.component.html',
  styleUrls: ['./testimonial-home.component.scss']
})
export class TestimonialHomeComponent implements OnInit {
  testimonial?: TestimonialResponse;


  constructor(private http: HttpClient) { }

  getTestimonial() {
    this.http.get<TestimonialResponse>('http://localhost:1337/api/testimonial', {
      params: {
        populate: 'testimonies.image'
      }
    }).subscribe(response => {
      console.log(response);
      this.testimonial = response

    })
  }

  ngOnInit(): void {
    this.getTestimonial()
  }
}
