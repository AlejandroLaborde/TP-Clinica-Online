import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  constructor( private router:Router, private asd:AngularFireDatabase) { 
    console.log(asd.list('/turnos', ref => ref.orderByChild('size').equalTo('large')));
  }

  ngOnInit(): void {
    
  }

  turnos(){
    this.router.navigate(['Turnos']);
  }

 
}
