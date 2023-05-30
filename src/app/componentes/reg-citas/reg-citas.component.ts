import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reg-usuarios',
  templateUrl: './reg-citas.component.html',
  styleUrls: ['./reg-citas.component.css'],
})
export class RegUsuariosComponent implements OnInit {
  formulario: FormGroup;

  citas: any;

  constructor(private userService: UserServiceService) {
    this.formulario = new FormGroup({
      nombreUsuario: new FormControl(),
      emailUsuario: new FormControl(),
      numTarjeta: new FormControl(),
      nombreCasa: new FormControl(),
      numPersonas: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  async onSubmit() {
    await this.userService.addCita(this.formulario.value);
    this.getUser();
  }

  async getUser() {
    this.citas = await this.userService.getCita();
  }

  async eliminarCita(nombreUsuario: any) {
    await this.userService.eliminarCita(nombreUsuario);
  }
}
