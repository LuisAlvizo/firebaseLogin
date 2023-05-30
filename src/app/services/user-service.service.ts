import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  items$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.users$ = this.firestore.collection('usuarios').valueChanges();
    this.items$ = this.firestore.collection('citas').valueChanges();
  }

  addCita(user: any) {
    this.firestore.collection('citas').add({ data: user });
  }

  addUser(user: any) {
    this.firestore.collection('usuarios').add({ data: user });
  }

  getCita() {
    return this.items$;
  }

  eliminarCita(nombreUsuario: any): void {
    this.firestore.doc('citas/' + nombreUsuario).delete()
      .then(() => {
        console.log('Dato ELIMINADO exitosamente');
      })
      .catch((error) => {
        console.error('Error al ELIMINAR el dato:', error);
      });
  }

  getUsersAuth() {
    return this.users$;
  }
}
