import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-navbar-top',
  templateUrl: './user-navbar-top.component.html',
  styleUrls: ['./user-navbar-top.component.scss']
})
export class UserNavbarTopComponent implements OnInit {
  public userProfileInfo = JSON.parse(window.localStorage.getItem('userProfileInfo'));

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToPage(pgName: string) {
    if(pgName=='edit-profile') {
      alert("user cannot view their profiles for now");
      return;
    }
    this.router.navigate([pgName]);
  }

  isAdmin() {
    return this.userProfileInfo.roles.findIndex(str=>str=='Admin') > -1;
  }

}
