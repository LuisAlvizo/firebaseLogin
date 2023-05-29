import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registrarU: FormGroup;
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) {
    this.registrarU = this.fb.group({
      email: ['', Validators.required],
      contra: ['', Validators.required],
      repetirContra: ['', Validators.required]
    });
  }

  registrar() {
    const email = this.registrarU.value.email;
    const contra = this.registrarU.value.contra;
    const repetirContra = this.registrarU.value.repetirContra;

    if (contra != repetirContra) {
      this.toastr.error('La contraseña no concide', 'Error');
      return;
    }
    this.cargando = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, contra)
      .then(() => {
        this.cargando = false;
        this.toastr.success('Registro exitoso', 'Usuario registrado');
        this.router.navigate(['/login']);
      }).catch((error) => {
        this.cargando = false;
        console.log(error);
        this.toastr.error(this.firebaseError(error.code), 'Error');
      })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      case 'auth/weak-password':
        return 'La contraseña es muy débil'
      case 'auth/invalid-email':
        return 'Correo inválido'
      default:
        return 'Error desconocido'
    }
  }
}
