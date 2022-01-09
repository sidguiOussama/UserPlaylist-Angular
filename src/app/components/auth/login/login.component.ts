import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.module";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup | undefined;
  user: User | undefined;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  OnSubmit() {
    this.user = new User();
    this.user.password = this.userForm?.get('password')?.value;
    this.user.login = this.userForm?.get('login')?.value;

    this.authService.signin(this.user.login,this.user.password).subscribe(
      (data) => {
        if(data.status != 'Error' && data.data.length > 0){
          localStorage.setItem('typeAuth', ''+data.data[0].role);
          localStorage.setItem('isAuth', 'true');
          localStorage.setItem('credentials' , JSON.stringify({login: this.user.login , password: this.user.password,id: data.data[0].id}));
          let navigate = 'search';
          if(data.data[0].role == 'admin') navigate= "users";
          else if(data.data[0].role == 'advert') navigate = "myAdverts"
            this.router.navigate(['/'+navigate])
              .then(() => {
                window.location.reload();
              });
        }else {
          alert('error');
        }
      }
    );

  }

}
