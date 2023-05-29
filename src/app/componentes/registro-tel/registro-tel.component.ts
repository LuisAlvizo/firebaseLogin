import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import 'firebase/compat/auth';
var config = {
  apiKey: "AIzaSyBF6KZLlf5ewEULFpykVw6mTTu6vKm_8rY",
  authDomain: "fir-login-60619.firebaseapp.com",
  projectId: "fir-login-60619",
  storageBucket: "fir-login-60619.appspot.com",
  messagingSenderId: "719132982087",
  appId: "1:719132982087:web:58b23464b829a80a0daa62"
}

@Component({
  selector: 'app-registro-tel',
  templateUrl: './registro-tel.component.html',
  styleUrls: ['./registro-tel.component.css']
})
export class RegistroTelComponent implements OnInit {
  registrarU: FormGroup;
  cargando: boolean = false;
  reCaptchaVerifier: any;
  tel: string = '';

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.registrarU = this.fb.group({
      tel: ['', Validators.required]
    });
  }
  ngOnInit() {
    firebase.initializeApp(config);
  }
  registrarTel() {
    this.tel = this.registrarU.value.tel;

    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });
    firebase.auth()
      .signInWithPhoneNumber(this.tel, this.reCaptchaVerifier)
      .then((confirmation) => {
        console.log(confirmation);
        localStorage.setItem('verID', JSON.stringify(confirmation.verificationId));
        this.router.navigate(['/verificaciontel']);
      }).catch((error) => {
        this.toastr.error(error.code, 'Error');
        console.log(error);
      })
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/invalid-phone-number':
        return 'Télefono inválido'
      default:
        return 'Error desconocido'
    }
  }
}
