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
    
    $(".hover12").click(function () {
      console.log("tst");
      var portClicked = $(this).attr("id");
      $("#portSelected").text(portClicked);
      $("#port-list").hide();
      $("#" + portClicked + "-display").show();
      $("#port-display-section").fadeIn('fast');
      $('html,body').animate({
        scrollTop: $("#port-section").offset().top - 90
      },
        'fast');
    });

    $("#port-return").click(function () {
      console.log("anything");
      $("#port-display-section,.port-display").hide();
      $("#port-list").fadeIn('fast');
      $('html,body').animate({
        scrollTop: $("#" + $("#portSelected").text()).offset().top - 170
      },
        'fast');
    });
 }
}
