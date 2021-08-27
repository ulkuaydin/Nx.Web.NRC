import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliders = document.querySelectorAll('.slide-in');
    const sliders2 = document.querySelectorAll('.slide-in2');
    const sliders3 = document.querySelectorAll('.slide-in3');
    const sliders4 = document.querySelectorAll('.slide-in4');
    const sliders5 = document.querySelectorAll('.slide-in5');
    const left1 = document.querySelectorAll('.from-left');
    const right1 = document.querySelectorAll('.from-right1');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll5 = new IntersectionObserver(function (
      entries,
      appearOnScroll5
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll5.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    sliders.forEach(slider => {
      appearOnScroll5.observe(slider);
    });
    sliders2.forEach(slider2 => {
      appearOnScroll5.observe(slider2);
    });
    sliders3.forEach(slider3 => {
      appearOnScroll5.observe(slider3);
    });
    sliders4.forEach(slider4 => {
      appearOnScroll5.observe(slider4);
    });
    sliders5.forEach(slider5 => {
      appearOnScroll5.observe(slider5);
    });
    left1.forEach(left => {
      appearOnScroll5.observe(left);
    });
    right1.forEach(right => {
      appearOnScroll5.observe(right);
    })
  
  }

}
