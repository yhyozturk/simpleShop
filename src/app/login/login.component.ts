import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }
  model: User = new User();

  ngOnInit() {
  }

  login(form: NgForm) {
    this.accountService.login(this.model);
    this.router.navigate(["/product-add"]);
  }

}
