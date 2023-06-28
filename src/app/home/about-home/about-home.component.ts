import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutResponse } from 'src/app/shared/models/about-response';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss'],
})
export class AboutHomeComponent implements OnInit {
  about?: AboutResponse;
  isLoading = true;
  errorMessage?: string;
  constructor(private http: HttpClient) { }

  getAbout() {
    this.http
      .get<AboutResponse>('http://localhost:1337/api/about-us', {
        params: {
          populate: 'cards.image',
        },
      })
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.about = response
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.message;
        },
      });

  }

  ngOnInit(): void {
    this.getAbout();
  }
}
