import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IUser } from './user.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(userName: string, password: string) {
    let user: IUser = {
      address: 'Pune',
      dob: new Date('12-Feb-2009'),
      email: 'abc@test.com',
      userName: 'test'
    };
    return of(user);
  }
}
