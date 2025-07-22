import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
  isHeaderSticky: boolean = false;

  constructor() {}

  @HostListener('window:scroll')
  onWindowScroll(){
    if (window.scrollY > 50) {
      this.isHeaderSticky = true;
    } else {
      this.isHeaderSticky = false;
    }
  }
}
