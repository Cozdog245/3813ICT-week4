import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: any;
  ngOnInit(): void {
  const stored = localStorage.getItem('currentUser');
  if (!stored) {
    return; // no user logged in — nothing to load
  }
  this.user = JSON.parse(stored);
}
save() {
  localStorage.setItem('currentUser', JSON.stringify(this.user));
}
}
