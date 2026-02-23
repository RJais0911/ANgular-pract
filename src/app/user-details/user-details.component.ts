import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {

  userId!: string | null;
  selectedUser: any;

  users = [
    { id: '1', name: 'Ravi', age: 25 },
    { id: '2', name: 'Priya', age: 22 },
    { id: '3', name: 'Amit', age: 28 }
  ];

  constructor(private route: ActivatedRoute) {
    // this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');

  
      this.selectedUser = this.users.find(
        user => user.id === this.userId
      );
    });
  }
}
