import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliders = document.querySelectorAll('.slide-in');
    const sliders2 = document.querySelectorAll('.slide-in2');
    const sliders3 = document.querySelectorAll('.slide-in3');
    const left1 = document.querySelectorAll('.from-left');
    const right1 = document.querySelectorAll('.from-right');
    const left2 = document.querySelectorAll('.from-left2');
    const right2 = document.querySelectorAll('.from-right2');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll3 = new IntersectionObserver(function (
      entries,
      appearOnScroll3
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll3.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    sliders.forEach(slider => {
      appearOnScroll3.observe(slider);
    });
    sliders2.forEach(slider2 => {
      appearOnScroll3.observe(slider2);
    });
    sliders3.forEach(slider3 => {
      appearOnScroll3.observe(slider3);
    });
    left1.forEach(left => {
      appearOnScroll3.observe(left);
    });
    right1.forEach(right => {
      appearOnScroll3.observe(right);
    });
    left2.forEach(left2 => {
      appearOnScroll3.observe(left2);
    });
    right2.forEach(right2 => {
      appearOnScroll3.observe(right2);
    })
  }

}
