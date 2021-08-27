import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const left1 = document.querySelectorAll('.from-left');
    const right1 = document.querySelectorAll('.from-right');
    const left2 = document.querySelectorAll('.from-left2');
    const right2 = document.querySelectorAll('.from-right2');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll2 = new IntersectionObserver(function (
      entries,
      appearOnScroll2
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll2.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    left1.forEach(left => {
      appearOnScroll2.observe(left);
    });
    right1.forEach(right => {
      appearOnScroll2.observe(right);
    });
    left2.forEach(left2 => {
      appearOnScroll2.observe(left2);
    });
    right2.forEach(right2 => {
      appearOnScroll2.observe(right2);
    })
  }

}
