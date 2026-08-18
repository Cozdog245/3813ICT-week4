import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
    constructor(private router: Router){}
  email = ''
  password = ''
  users = [
    {
    email: "a@a.com", 
    password: "123"},
     {
      email: "b@b.com",
      password: "456"},
      {
      email: "john@email.com",
      password: "789" 
      }]
  errorMessage = ''

  login(){
    const userExists = this.users.find(user => user.email === this.email)

    if (!userExists){
      this.errorMessage = 'Incorrect credentials';
      return;
    }
    if (userExists.password != this.password){
      this.errorMessage = 'Incorrect credentials';
      return;
    }

    this.router.navigate(['/profile'])
  }
}
