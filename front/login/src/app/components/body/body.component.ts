import { Component } from '@angular/core';
import { LoopComponent } from '../loop/loop.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [LoginComponent,LoopComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
