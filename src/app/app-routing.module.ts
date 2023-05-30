import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { RecuperarContraComponent } from './componentes/recuperar-contra/recuperar-contra.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerificacionComponent } from './componentes/verificacion/verificacion.component';
import { OpLoginComponent } from './componentes/op-login/op-login.component';
import { LoginTelComponent } from './componentes/login-tel/login-tel.component';
import { OpRegistroComponent } from './componentes/op-registro/op-registro.component';
import { RegistroTelComponent } from './componentes/registro-tel/registro-tel.component';
import { VerificacionTelComponent } from './componentes/verificacion-tel/verificacion-tel.component';
import { RegUsuariosComponent } from './componentes/reg-citas/reg-citas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'oplogin', pathMatch: 'full' },
  { path: 'oplogin', component: OpLoginComponent },
  { path: 'opregistro', component: OpRegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logintel', component: LoginTelComponent },
  { path: 'dashboard', component: RegUsuariosComponent },
  { path: 'recuperacion', component: RecuperarContraComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrotel', component: RegistroTelComponent },
  { path: 'verificacion', component: VerificacionComponent },
  { path: 'verificaciontel', component: VerificacionTelComponent },
  { path: 'regUser', component: RegUsuariosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: 'oplogin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
