import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  listaDeMensajes : any = [];
  usuarioActual : string = '';
  mensajeAEnviar : string = '';

  constructor(private mensajesService: MensajesService, private userService : UsuarioService) {}

  async ngOnInit() {
    try {
      this.listaDeMensajes = await this.mensajesService.obtenerMensajesDelChat();
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
    this.usuarioActual = this.userService.mail;
  }

  async publicarMensajeEnChat() {
    console.log("mandando mensaje");
    this.userService.publicarMensaje(this.mensajeAEnviar);
    this.listaDeMensajes = await this.mensajesService.obtenerMensajesDelChat();
  }


}
