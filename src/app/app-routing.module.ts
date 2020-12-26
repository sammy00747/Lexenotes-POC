import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: (()=>{
    return (window.localStorage.getItem("userLoginInfo") ? "home" : "login")
  })(), pathMatch: "full" },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin', redirectTo: "admin/dashboard", pathMatch: "full" },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-user', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
