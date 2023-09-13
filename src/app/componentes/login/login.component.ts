import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../home/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public mailText = '';

  public contraseniaText = '';

  private user : Usuario = new Usuario('','');

  constructor(private router: Router) {}

  async loginEvent() {
    this.user.contraseña = this.contraseniaText;
    this.user.mail = this.mailText;
    try {
      if(await this.user.loginConFirebase())
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





