import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
// export class RegistroComponent implements OnInit {
export class RegistroComponent {
  registrarU: FormGroup;
  reCaptchaVerifier: any;
  tel: string = '';

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) {
    this.registrarU = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      contra: ['', Validators.required],
      repetirContra: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }
  // ngOnInit() {
  //   firebase.initializeApp(config);
  // }

  registrar() {
    const email = this.registrarU.value.email;
    const contra = this.registrarU.value.contra;
    const repetirContra = this.registrarU.value.repetirContra;
    this.tel = this.registrarU.value.tel;

    if (contra != repetirContra) {
      this.toastr.error('La contraseña no concide', 'Error');
      return;
    }
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });
    this.afAuth
      .createUserWithEmailAndPassword(email, contra)
      .then(() => {
        // this.toastr.success('Registro exitoso', 'Usuario registrado');
      }).catch((error) => {
        console.log(error);
        this.toastr.error(this.firebaseError(error.code), 'Error');
        return;
      })
    firebase.auth()
      .signInWithPhoneNumber(this.tel, this.reCaptchaVerifier)
      .then((confirmation) => {
        console.log(confirmation);
        localStorage.setItem('verID', JSON.stringify(confirmation.verificationId));
        this.toastr.success('Registro exitoso', 'Usuario registrado');
        this.router.navigate(['/verificaciontel']);
      }).catch((error) => {
        this.toastr.error(error.code, 'Error');
        console.log(error);
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
      case 'auth/invalid-phone-number':
        return 'Télefono inválido'
      default:
        return 'Error desconocido'
    }
  }
}
