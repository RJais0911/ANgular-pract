import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpUsersService } from './http-users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-http-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-users.component.html',
  styleUrls: ['./http-users.component.css'],
})
export class HttpUsersComponent implements OnInit {

  users: User[] = [];           //stores API response
  loading = false;             //controls loading message
  errorMsg = '';               //display error message

  constructor(private httpUsersService: HttpUsersService) {} //injecting the service

  ngOnInit(): void {
    this.loading = true;

    this.httpUsersService.getUsers().subscribe({
      next: data => {
        this.users = data;  //on success->assign users
        this.loading = false;
      },
      error: err => {
        this.errorMsg = err;  //on error-> show message
        this.loading = false;
      }
    });
  }
}
