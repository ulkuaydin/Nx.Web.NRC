import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
 
  }
  onClickedOutside(e: Event) {
    this.isOpen = true;
  }
  openMenu(): void {
  
    this.isOpen = !this.isOpen;

    
  }

}
