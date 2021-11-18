import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { promise } from 'selenium-webdriver';
import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
      resolve(user);
      }).catch(err => rejected(err)); 
    }) 
  }

  register(email:string, password:string, name:string){
    return new Promise ((resolve, rejected) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
        //console.log(res.user.uid)
        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
            name : name,
            uid : uid,
            email : email
        })
        resolve(res)
      }).catch(err => rejected(err))
    })
    

  }

}
