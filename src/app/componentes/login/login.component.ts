import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginU: FormGroup;
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) {
    this.loginU = this.fb.group({
      email: ['', Validators.required],
      contra: ['', Validators.required]
    });
  }
  login() {
    const email = this.loginU.value.email;
    const contra = this.loginU.value.contra;
    this.cargando = true;
    this.afAuth.signInWithEmailAndPassword(email, contra).then((user) => {
      console.log(user);
      this.toastr.success('Login exitoso','Mensaje');
      this.router.navigate(['/dashboard']);
      this.cargando = false;
    }).catch((error) => {
      this.toastr.error('Login falló','Mensaje');
      console.log(error);
      this.cargando = false;
    })
  }
}
