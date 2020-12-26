import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public user_list=[];

  constructor(public agfrStore: AngularFirestore) {
    agfrStore.collection("users").get().subscribe(qrysht=>{
      let tmp=[];
      qrysht.forEach(doc=>{
        tmp.push(doc.data());
      });
      this.user_list = [...tmp];
    })
  }

  ngOnInit() {
  }

}
