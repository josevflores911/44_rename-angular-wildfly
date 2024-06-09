import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../intefaces/users';

@Component({
  selector: 'app-loop',
  standalone: true,
  imports: [],
  providers:[LoginService],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.scss'
})
export class LoopComponent {

  users: User[] = []

  httpClient = inject(LoginService)
  
  ngOnInit():void {
    this.httpClient.getAll().subscribe((users) => {
      this.users=users
    })
  }

}
