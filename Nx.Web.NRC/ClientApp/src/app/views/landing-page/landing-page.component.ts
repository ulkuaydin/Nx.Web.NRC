import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var topbutton = document.getElementById("topBtn") as HTMLElement;
    window.onscroll = function () {
      scrollFunction()
    };
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
      }
      else {
        topbutton.style.display = "none";
      }
    }
  }
  clickToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
