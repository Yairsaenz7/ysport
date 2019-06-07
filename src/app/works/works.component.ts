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
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  worksCol: AngularFirestoreCollection<Work>;
  works:Observable<Work[]>;

  constructor(private afs: AngularFirestore){}

  
  ngOnInit() {
    this.worksCol = this.afs.collection('works');
    this.works = this.worksCol.valueChanges();
  }
  
}
