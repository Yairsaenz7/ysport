import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class WorkService {

  worksCol: AngularFirestoreCollection<Work>;
  works: Observable<Work[]>;

  constructor(private afs: AngularFirestore) { }

  getWorks() {
    this.worksCol = this.afs.collection('works', ref => ref.orderBy('order'));
    this.works = this.worksCol.valueChanges();
    return this.worksCol.valueChanges();
  }
}

interface Work {
  name: string;
  desc: string;
  image: string;
}
