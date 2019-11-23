import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { UserState, profileSelector } from '../state/user.reducer';
import { LoginSuccess, Login } from '../state/user.actions';
import { IUser } from '../state/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user$: Observable<IUser>;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private store: Store<UserState>) { }

  ngOnInit() {

    this.user$ = this.store.pipe(select(profileSelector));

    this.loginForm = this.fb.group({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    // let user: IUser = {
    //   address: 'Pune',
    //   dob: new Date('12-Feb-2009'),
    //   email: 'abc@test.com',
    //   userName: 'test'
    // }
    this.store.dispatch(Login({ userName: 'test', password: 'test' }));
  }

}
