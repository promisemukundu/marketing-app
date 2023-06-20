import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamsResponse } from 'src/app/shared/models/teams-response';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams?: TeamsResponse

  constructor(private http: HttpClient) { }

  getTeams() {
    this.http.get<TeamsResponse>('http://localhost:1337/api/team', {
      params: {
        populate: 'members.image'
      }
    }).subscribe(response => {
      console.log(response);
      this.teams = response

    })
  }

  ngOnInit(): void {
    this.getTeams()
  }
}
