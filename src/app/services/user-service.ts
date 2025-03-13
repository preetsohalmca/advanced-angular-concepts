import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _refresh = new Subject<void>();
  get refresh() {
    return this._refresh;
  }
  constructor(private _httpClient: HttpClient) { }
  getTeams() {
    return this._httpClient.get('/api/teams');
  }
  addTeam(team: any){
    return this._httpClient.post('/api/teams',team).pipe(tap(()=>{
      this._refresh.next();
    }));
  }
  deleteTeam(teamid: any){
    return this._httpClient.delete('/api/teams/'+teamid).pipe(tap(()=>{
      this._refresh.next();
    }));
  }
}
