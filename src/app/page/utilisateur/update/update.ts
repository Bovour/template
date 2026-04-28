 import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateursService } from '../../../service/utilisateur';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit {

  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private service: UtilisateursService,
    private dialogRef: MatDialogRef<Update>,
    @Inject(MAT_DIALOG_DATA) public utilisateur: any
  ) {}

  ngOnInit(): void {

     this.form = this.fb.group({
      nom: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: [''],
      role: ['',[Validators.required]],
      entreprise: ['',[Validators.required]]
    });
  
    this.id = this.utilisateur.id;
    this.form.patchValue({
      nom: this.utilisateur.nom,
      email: this.utilisateur.email,
      password: '',
      role: this.utilisateur.roleNom,
      entreprise: this.utilisateur.entreprise
    });

  }

  // ================= UPDATE =================
  update(): void {
    console.log(this.form.value)
    this.service.update(this.id, this.form.value).subscribe(result=>{
       this.dialogRef.close(true);
    });
  }
}