import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user.module';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup | undefined;
  user: User | undefined;
  selectedOption = 'France';
  choices = [
    {id: 0 ,name:"France" , label: "France"},
    {id: 1 ,name:"USA", label: "USA"},
    {id: 2 ,name:"Italy",label: "Italy"},
    {id: 3 ,name:"Canada", label: "Canada"},
    {id: 4 ,name:"Morocco", label: "Morocco"}
  ];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  OnSubmit() {
    this.user = new User();
    this.user.firstname = this.userForm?.get('firstname')?.value;
    this.user.lastname = this.userForm?.get('lastname')?.value;
    this.user.password = this.userForm?.get('password')?.value;
    this.user.login = this.userForm?.get('login')?.value;
    this.user.contact = {phone: this.userForm?.get('phone')?.value,email:this.userForm?.get('email')?.value};

    this.user.address = {
      country: this.userForm?.get('country')?.value,
      city : this.userForm?.get('city')?.value,
      zipCode : this.userForm?.get('zipCode')?.value,
      address : this.userForm?.get('address')?.value
    }
    this.user.role = 'userSimple';

    this.authService.signup(this.user).subscribe(
      (data) => {
        if(data.status != 'Error'){
            this.router.navigateByUrl('/login');
        }else {
          alert('Error')
        }
      }
    );

  }
}
