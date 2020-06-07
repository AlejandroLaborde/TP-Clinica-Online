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

    asd.list('/especialidades', ref => ref).valueChanges().subscribe(dd=>{
      console.log(dd);
    })
    asd.list('/turnos', ref => ref.orderByChild("estado").equalTo("FINALIZADO")).valueChanges().subscribe(dd=>{
      console.log(dd);
    })

    asd.list
  }

  ngOnInit(): void {
    
  }

  turnos(){
    this.router.navigate(['Turnos']);
  }

 
}
