import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamsResponse } from 'src/app/shared/models/teams-response';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teams?: TeamsResponse;
  isLoading: boolean = true;
  errorMessage?: string;

  constructor(private http: HttpClient) { }

  getTeams() {
    this.http
      .get<TeamsResponse>('http://localhost:1337/api/team', {
        params: {
          populate: 'members.image',
        },
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((response) => {
        console.log(response);
        this.teams = response;
      });
  }

  ngOnInit(): void {
    this.getTeams();
  }
}
