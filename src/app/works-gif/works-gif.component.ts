import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

interface Work {
  name: string;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-works-gif',
  templateUrl: './works-gif.component.html',
  styleUrls: ['./works-gif.component.css']
})
export class WorksGifComponent implements OnInit {

  worksCol: AngularFirestoreCollection<Work>;
  works: Observable<Work[]>;

  constructor(private afs: AngularFirestore) { }


  ngOnInit() {
    this.worksCol = this.afs.collection('works', ref => ref.orderBy('order'));
    this.works = this.worksCol.valueChanges();
  }

}
