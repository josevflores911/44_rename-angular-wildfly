import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [/*FormsModule*/ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  providers:[],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  })
  
  onSubmit() {
    console.log(this.form.controls.username.value);
  }

/*  formData = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Here you can add your login logic, like sending the form data to a server
    console.log('Form submitted:', this.formData);
  }
*/
}
