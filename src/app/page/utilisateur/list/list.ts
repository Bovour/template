 import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../model/utilisateur';
import { UtilisateursService } from '../../../service/utilisateur';
import { MatDialog } from '@angular/material/dialog';
import { Add } from '../add/add';
import { Update } from '../update/update';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {

  utilisateurs: any[] = [];

  constructor(
    private service: UtilisateursService,
    private dialog: MatDialog
  ) {
    this.load();
  }

  ngOnInit(): void {
    this.load();
  }

  // ================= LOAD USERS =================
  load(): void {
    this.service.getAll().subscribe((data) =>{
      this.utilisateurs = data;
    });
  }

  // ================= DELETE =================
  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.load();
    });
  }
  // ================= OPEN ADD DIALOG =================
  openAddDialog(): void {
    const dialogRef = this.dialog.open(Add, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.load();
      }
    });
  }

openUpdateDialog( utilisateur: Utilisateur): void {
  const dialogRef = this.dialog.open(Update, {
    width: '500px',
    data: utilisateur // ✔ on envoie tout l'utilisateur
  });

   dialogRef.afterClosed().subscribe(result => {
  if (result) {
    this.load();
  }
});
}
}