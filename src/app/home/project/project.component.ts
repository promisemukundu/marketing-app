import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponse } from 'src/app/shared/models/project-response';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects?: ProjectResponse
  isLoading: boolean = true
  errorMessage?: string
  constructor(private http: HttpClient) { }

  getProject() {
    this.http.get<ProjectResponse>('http://localhost:1337/api/projects', {
      params: {
        populate: 'projects.image'
      }
    })
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(response => {
        console.log(response);
        this.projects = response
      })
  }

  ngOnInit(): void {
    this.getProject()
  }
}
