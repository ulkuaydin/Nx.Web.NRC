import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sliders = document.querySelectorAll('.slide-in');
    const sliders2 = document.querySelectorAll('.slide-in2');
    const sliders3 = document.querySelectorAll('.slide-in3');
    const appearOptions = {
      threshold: 0,
    }
    const appearOnScroll1 = new IntersectionObserver(function (
      entries,
      appearOnScroll1
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll1.unobserve(entry.target);
        }
      })
    },
      appearOptions);
    sliders.forEach(slider => {
      appearOnScroll1.observe(slider);
    });
    sliders2.forEach(slider2 => {
      appearOnScroll1.observe(slider2);
    });
    sliders3.forEach(slider3 => {
      appearOnScroll1.observe(slider3);
    })
  }

}
