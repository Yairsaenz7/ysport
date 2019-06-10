import { Component } from '@angular/core';
import {AfterViewInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ysport';



  ngAfterViewInit() {
    $("#port-return").click(function () {
      $("#port-display-section,.port-display").hide();
      $("#port-list").fadeIn('fast');
      $('html,body').animate({
        scrollTop: $("#" + $("#portSelected").text()).offset().top - 170
      },
        'fast');
    });
 }
}
