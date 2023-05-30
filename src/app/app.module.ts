import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgOtpInputModule } from  'ng-otp-input';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerificacionComponent } from './componentes/verificacion/verificacion.component';
import { RecuperarContraComponent } from './componentes/recuperar-contra/recuperar-contra.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { OpLoginComponent } from './componentes/op-login/op-login.component';
import { LoginTelComponent } from './componentes/login-tel/login-tel.component';
import { OpRegistroComponent } from './componentes/op-registro/op-registro.component';
import { RegistroTelComponent } from './componentes/registro-tel/registro-tel.component';
import { environment } from './environments/environment';
import { VerificacionTelComponent } from './componentes/verificacion-tel/verificacion-tel.component';
import { RegUsuariosComponent } from './componentes/reg-citas/reg-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    VerificacionComponent,
    RecuperarContraComponent,
    SpinnerComponent,
    OpLoginComponent,
    LoginTelComponent,
    OpRegistroComponent,
    RegistroTelComponent,
    VerificacionTelComponent,
    RegUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
