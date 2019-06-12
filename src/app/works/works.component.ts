import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {WorkService} from '../work.service';

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

  works: Observable<Work[]>;

  constructor(private workService: WorkService) { }

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
    this.works = this.workService.getWorks();
  }

}
