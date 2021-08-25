import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //var countDownDate = new Date("Sep 21, 2022 17:22:33").getTime();

    //var x = setInterval(function () {
    //  var now = new Date().getTime();
    //  var distance = countDownDate - now;
    //  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //  var daysDocument = document.querySelector(".buy__form__body__countdown__days__h4") as HTMLElement;
    //  daysDocument.innerHTML = days + "";
    //  var hoursDocument = document.querySelector(".buy__form__body__countdown__hours__h4") as HTMLElement;
    //  hoursDocument.innerHTML = hours + "";
    //  var minutesDocument = document.querySelector(".buy__form__body__countdown__minutes__h4") as HTMLElement;
    //  minutesDocument.innerHTML = minutes + "";
    //  var secondsDocument = document.querySelector(".buy__form__body__countdown__seconds__h4") as HTMLElement;
    //  secondsDocument.innerHTML = seconds + "";

    //  if (distance < 0) {
    //    clearInterval(x);
    //    daysDocument.innerHTML = "EXPIRED";
    //    hoursDocument.innerHTML = "EXPIRED";
    //    minutesDocument.innerHTML = "EXPIRED";
    //    secondsDocument.innerHTML = "EXPIRED";


    //  }
    //},1000)

  }

}
