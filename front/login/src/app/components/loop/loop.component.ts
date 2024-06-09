import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../intefaces/users';
import { RouterLink,RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-loop',
  standalone: true,
  imports: [],
  providers:[LoginService,RouterLink,MatButtonModule,RouterModule],
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
