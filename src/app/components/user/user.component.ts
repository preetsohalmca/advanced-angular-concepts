import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$: any = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getTeams();
    this.userService.refresh.subscribe(res => {
      this.getTeams();
    });
  }
  getTeams() {
    this.users$ = this.userService.getTeams();
  }
  addTeam() {
    this.users$ = this.userService.addTeam({
      "id": Math.floor(Math.random() * 1000),
      "name": "FC Barcelona",
      "coach": "Ernesto Valverde",
      "description": "The best football team in the world!"
    });
  }
deleteTeam(id: any) {
    this.users$ = this.userService.deleteTeam(id);
  }
}
