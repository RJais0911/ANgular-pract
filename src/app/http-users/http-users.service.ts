import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({                  //ensures the service is reused across the app
  providedIn: 'root'
})
export class HttpUsersService {

  private apiUrl = '/data/users.json';  

  constructor(private http: HttpClient) {}  //used to make HTTP requests

  getUsers() {
    return this.http.get<User[]>(this.apiUrl).pipe(     //sends GET request
      retry(2),                     //retries API call twice on failure
      timeout(5000),               //fails if response takes more than 5 seconds
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => 'Failed to load users');
  }
}
