import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponse } from 'src/app/shared/models/project-response';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects?: ProjectResponse
  constructor(private http: HttpClient) { }

  getProject() {
    this.http.get<ProjectResponse>('http://localhost:1337/api/projects?populate=projects.image').subscribe(response => {
      console.log(response);
      this.projects = response
    })
  }

  ngOnInit(): void {
    this.getProject()
  }
}
