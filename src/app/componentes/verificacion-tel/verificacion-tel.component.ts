import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-verificacion-tel',
  templateUrl: './verificacion-tel.component.html',
  styleUrls: ['./verificacion-tel.component.css']
})
export class VerificacionTelComponent implements OnInit {
  otp!: string;
  verify: any;
  user: any;
  config = {
    allowNumbersOnly: true,
    length: 6
  }
  constructor(private toastr: ToastrService, private router: Router) {

  }
  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verID') || '{}');
    console.log(this.verify);
  }
  onOtpChange(otpCode: any) {
    this.otp = otpCode;
  }

  handleClick() {
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, this.otp);
    firebase.auth().signInWithCredential(credentials).then((response) => {
      console.log(response.user);
      this.user = response.user;
      this.toastr.success('Clave de verificación correcta');
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.toastr.error('Clave de verificación incorrecta');
    })
  }
}
