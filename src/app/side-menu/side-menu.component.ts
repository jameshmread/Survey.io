import { Component, OnInit } from '@angular/core';
import { MenuAnimations } from '../animations/menu-animations';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [MenuAnimations.menuOpenClose()]
})
export class SideMenuComponent implements OnInit {

  public collapsed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu () {
    this.collapsed = !this.collapsed;
  }

}
