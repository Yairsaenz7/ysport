import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

interface Work {
  name: string;
  desc: string;
  image: string;
}

declare var $: any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  worksCol: AngularFirestoreCollection<Work>;
  works: Observable<Work[]>;

  constructor(private afs: AngularFirestore) { }

  showGif(id) {
    $("#port-list").hide();
    $("#portSelected").text("port-" + id);
    $("#port-" + id + "-display").show();
    $("#port-display-section").fadeIn('fast');
    $('html,body').animate({
      scrollTop: $("#port-section").offset().top - 90
    },
      'fast');
  }

  ngOnInit() {
    this.worksCol = this.afs.collection('works', ref => ref.orderBy('order'));
    this.works = this.worksCol.valueChanges();

  }

}
