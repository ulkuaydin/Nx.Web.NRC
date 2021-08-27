import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliders = document.querySelectorAll('.slide-in');
    const sliders2 = document.querySelectorAll('.slide-in2');
    const sliders3 = document.querySelectorAll('.slide-in3');
    const left1 = document.querySelectorAll('.from-left');
    const right1 = document.querySelectorAll('.from-right');
    const left2 = document.querySelectorAll('.from-left2');
    const right2 = document.querySelectorAll('.from-right2');
    const right3 = document.querySelectorAll('.from-right3');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll6 = new IntersectionObserver(function (
      entries,
      appearOnScroll6
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll6.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    sliders.forEach(slider => {
      appearOnScroll6.observe(slider);
    });
    sliders2.forEach(slider2 => {
      appearOnScroll6.observe(slider2);
    });
    sliders3.forEach(slider3 => {
      appearOnScroll6.observe(slider3);
    });
    left1.forEach(left => {
      appearOnScroll6.observe(left);
    });
    right1.forEach(right => {
      appearOnScroll6.observe(right);
    });
    left2.forEach(left2 => {
      appearOnScroll6.observe(left2);
    });
    right2.forEach(right2 => {
      appearOnScroll6.observe(right2);
    });
    right3.forEach(right3 => {
      appearOnScroll6.observe(right3);
    })
  }

}
