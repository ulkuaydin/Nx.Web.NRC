import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['Türkçe', 'English']);
    translate.setDefaultLang('Türkçe');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/Türkçe|English/) ? browserLang : 'Türkçe');
  }

  ngOnInit(): void {

  }
  onClickedOutside(e: Event) {
    this.isOpen = true;
  }
  openMenu(): void {
  
    this.isOpen = !this.isOpen;

    
  }

}
