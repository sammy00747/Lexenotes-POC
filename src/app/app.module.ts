import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserNavbarTopComponent } from './user-navbar-top/user-navbar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    EditProfileComponent,
    UserNavbarTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBhB27tSbO9RsXEi9yPuB2wRXMUkxO2s1g",
      authDomain: "lexenotes-poc.firebaseapp.com",
      projectId: "lexenotes-poc",
      storageBucket: "lexenotes-poc.appspot.com",
      messagingSenderId: "339339965555",
      appId: "1:339339965555:web:91f48891af9deb6edc2606",
      measurementId: "G-EJK5GZSB1S"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
