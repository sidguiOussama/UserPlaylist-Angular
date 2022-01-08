import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  isAuth = false;
  roleType = '';
  credentialsId = '';
  ngOnInit(): void {

    if (localStorage.getItem('isAuth') === 'true'){
      this.isAuth = true;
      this.roleType = localStorage.getItem('typeAuth');
      this.credentialsId= JSON.parse(localStorage.getItem('credentials')).id;
       console.log(this.credentialsId);
    }else {
      this.isAuth = false;
    }
  }


  diconnect() {
    localStorage.setItem('isAuth' , 'false');
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }
}
