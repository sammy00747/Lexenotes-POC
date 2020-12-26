import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user;
  constructor(public auth: AngularFireAuth, public router: Router, public agfrStore: AngularFirestore) {
    this.auth.authState.subscribe(user=>{
      if(user) {
        this.user=user;
        window.localStorage.setItem("userLoginInfo",JSON.stringify(user));
      }
      else {
        this.user=null;
        window.localStorage.removeItem("userLoginInfo");
      }
    })
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).then(res=>{
      this.agfrStore.collection("users").ref.where("email","==",email).get().then(qrySnap=>{
        console.log(qrySnap.docs.length)
        if(qrySnap.docs.length) {
          this.agfrStore.collection("users").doc(qrySnap.docs[0].id).get().subscribe(profile=>{
            window.localStorage.setItem("userProfileInfo",JSON.stringify(profile.data()));
            this.router.navigate(['home']);
          },err=>{console.error("An error occured while retrieving data")});
        }
      })
    }).catch(()=>{console.error("An error occured during login")});
  }

  async logout(){
    await this.auth.signOut();
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}
