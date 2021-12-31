import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userBody: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    birthDate: undefined,
    role: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    if (this.userBody.role === 'organization') {
      this.userBody.lastname = this.userBody.firstname;
    }
    console.log(this.userBody);
  }
}