import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
    constructor(private router: Router,
                private http: HttpClient
    ){}
  email = ''
  password = ''
  errorMessage = ''

  login(){
    this.http.post('http://localhost:3000/api/auth',{
      email: this.email,
      password: this.password
    }).subscribe((response: any) =>{
      if(response.valid){
        localStorage.setItem('currentUser', JSON.stringify(response))
        this.router.navigate(['/profile'])
      } else{
        this.errorMessage = 'Incorrect credentials';
        return;
      }
    })
  }
}
