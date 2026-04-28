import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
