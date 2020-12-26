import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public fname="";
  public lname="";
  public email="";
  public prefrd_email="";
  public ofc_email="";
  public ofc_phno="";
  public cell_phno="";
  public prefrd_phno="";
  public inst="";
  public alt_inst="";
  public roles = {
    admin: false,
    author: false,
    user: false
  }

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    const { fname, lname, email, prefrd_email, ofc_email, cell_phno, prefrd_phno, ofc_phno, inst, alt_inst } = this;
    let roles=[];
    if(this.roles.admin) roles.push("Admin");
    if(this.roles.author) roles.push("Author");
    if(this.roles.user) roles.push("User");
    let detailsObj = { fname, lname, email, prefrd_email, ofc_email, cell_phno, prefrd_phno, ofc_phno, inst, alt_inst, roles };
    console.log(detailsObj);

  }

}
