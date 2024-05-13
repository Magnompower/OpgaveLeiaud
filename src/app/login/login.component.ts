import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private http: HttpClient,private router: Router) {}
// TODO
  onSubmit() {
    this.http.post('/api/login', {username: this.username, password: this.password}).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/news']);
      },
      error: (err) => {
        alert('Login fejlede: ' + err.message + '. Koden er user + pass');
      }
    });
  }


  onSubmitUser() :void{
    this.router.navigate(['/news']);
    alert('Tilykke med din nye bruger! brugernavn: "user" password "pass"')
  }

}
