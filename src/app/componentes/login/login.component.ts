import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../home/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public mailText = '';

  public contraseniaText = '';


  constructor(private router: Router, private usuarioService: UsuarioService) {}

  accesoRapidoUno() {
    this.mailText = 'pepe@gmail.com';
    this.contraseniaText = '123456';
  }

  accesoRapidoDos() {
    this.mailText = 'test@gmail.com';
    this.contraseniaText = '123456';
  }

  async loginEvent() {
    try {
      if(await this.usuarioService.loginConFirebase(this.mailText,this.contraseniaText))
      {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido!',
        }).then(() => {
          this.router.navigate(['/home']); 
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: "Mail o contraseña incorrecta",
        })
      }
    } catch (error) {
      console.log(error);
    }
    }
  }





