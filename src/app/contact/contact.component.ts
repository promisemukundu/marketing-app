import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyDetails } from '../shared/models/company-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  submitForm: FormGroup;

  constructor(private http: HttpClient) {
    this.submitForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.submitForm.value);
    this.submitForm.reset();
  }

  details?: CompanyDetails;
  isLoading: boolean = true;

  getDetails() {
    this.http
      .get<CompanyDetails>('http://localhost:1337/api/company-detail')
      .subscribe((response) => {
        console.log(response);
        this.details = response;
        console.log(this.details);
      });
  }

  ngOnInit(): void {
    this.getDetails();
  }
}
