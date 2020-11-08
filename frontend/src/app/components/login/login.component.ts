import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'javainuse';
  password = '';
  invalidLogin = false;
  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}
}
