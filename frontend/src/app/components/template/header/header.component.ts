import { Component, HostListener } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private headerService: HeaderService){

  }

  get title(): string{
    return this.headerService.headerData.title;
  }
  get icon(): string{
    return this.headerService.headerData.icon;
  }
  get routeUrl(): string{
    return this.headerService.headerData.routeUrl;
  }
}
