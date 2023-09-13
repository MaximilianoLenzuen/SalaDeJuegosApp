import { Component } from '@angular/core';
import { Usuario } from '../home/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  public mailText = '';

  public contraseniaText = '';

  private user : Usuario = new Usuario('','');

  constructor(private router: Router) {}

  async crearUsuario() {
    this.user.contraseña = this.contraseniaText;
    this.user.mail = this.mailText;
    try {
      if(await this.user.registrarUsuario())
      {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado con exito',
          text: 'Exito!',
        }).then(() => {
          this.router.navigate(['/login']); 
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error al crear la cuenta',
          text: 'Error!',
        });
      }
    } catch (error) {
      console.log(error);
    }
    }
}
