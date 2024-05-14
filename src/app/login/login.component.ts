import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'user' && this.password === 'pass') {
      this.router.navigate(['/news']);
    } else {
      alert('Forket kode! Koden er user + pass ');
    }
  }


  onSubmitUser() :void{
    this.router.navigate(['/app']);
    alert('Tilykke med din nye bruger! brugernavn: user password: pass')
  }
  // colors.green('Tilykke med din nye bruger!') + 'brugernavn: "' +colors.blue('user') +
  // '" password: "' + colors.blue('pass')+'"'
}
