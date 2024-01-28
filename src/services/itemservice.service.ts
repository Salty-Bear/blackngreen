import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(public afs:AngularFirestore) { }

  email:string = "";
  add(item:Item){
    this.email = JSON.parse(localStorage.getItem('user') || '{}').email
    this.afs.collection('exceldata').doc(this.email).collection('entries').add({item});
  }
}
