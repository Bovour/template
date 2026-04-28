import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: false,
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {
   isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
