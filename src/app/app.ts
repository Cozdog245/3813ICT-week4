import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router){}
  protected readonly title = signal('week4');

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
}
}
