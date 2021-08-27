import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const left1 = document.querySelectorAll('.from-left');
    const right1 = document.querySelectorAll('.from-right');
    const left2 = document.querySelectorAll('.from-left2');
    const right2 = document.querySelectorAll('.from-right2');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll4 = new IntersectionObserver(function (
      entries,
      appearOnScroll4
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll4.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    left1.forEach(left => {
      appearOnScroll4.observe(left);
    });
    right1.forEach(right => {
      appearOnScroll4.observe(right);
    });
    left2.forEach(left2 => {
      appearOnScroll4.observe(left2);
    });
    right2.forEach(right2 => {
      appearOnScroll4.observe(right2);
    })
  }

}
