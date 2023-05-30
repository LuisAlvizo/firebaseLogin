import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: any;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    this.usuarios = await this.userService.getUsersAuth();
  }
}
