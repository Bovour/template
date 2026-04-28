 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateursService } from '../../../service/utilisateur';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UtilisateursService,
    private dialogRef: MatDialogRef<Add>
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      entreprise: ['', Validators.required]
    });
  }

  // ================= CREATE =================
  submit(): void {

    // 🔍 1. Voir si formulaire est valide
    console.log("Form valid ?", this.form.valid);

    // 🔍 2. Voir les valeurs envoyées
    console.log("FORM VALUE 👉", this.form.value);

    // 🔍 3. Sécurité (corrige ton bug actuel)
    if (this.form.valid) {
       this.service.create(this.form.value).subscribe({
      next: (res) => {
        console.log("✅ SUCCESS RESPONSE:", res);
        this.form.reset();
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error("❌ ERREUR BACKEND:", err);
      }
    });

  }
}
}