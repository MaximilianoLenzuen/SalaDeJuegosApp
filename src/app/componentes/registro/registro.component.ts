import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  public mailText = '';

  public contraseniaText = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  async crearUsuario() {
    try {
      const existeUsuario = await this.usuarioService.verificarUsuarioExistente(this.mailText);
      if(existeUsuario) {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear la cuenta',
          text: 'El usuario ya está registrado',
        });
      } else{
        if(await this.usuarioService.registrarUsuario(this.mailText,this.contraseniaText))
        {
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado con exito',
            text: 'Exito!',
          }).then(() => {
            console.log(this.usuarioService.loginConFirebase(this.mailText,this.contraseniaText));
            this.router.navigate(['/home']); 
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error al crear la cuenta',
            text: 'Error!',
          });
        }
      }

    } catch (error) {
      console.log(error);
    }
    }
}
