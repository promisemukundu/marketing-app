import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyDetails } from 'src/app/shared/models/company-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.scss'],
})
export class QouteComponent implements OnInit {
  submitForm: FormGroup;
  details?: CompanyDetails;
  isLoading: boolean = true;

  constructor(private http: HttpClient) {
    this.submitForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      service: new FormControl(null, Validators.required),
    });
  }


  onSubmit() {
    console.log(this.submitForm.value);
    this.submitForm.reset();
  }



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
