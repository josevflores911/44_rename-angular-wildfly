import { Injectable,Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../intefaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient = inject(HttpClient);

  constructor() { }

  getAll():Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }
}
