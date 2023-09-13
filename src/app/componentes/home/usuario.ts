import { inject } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from '@angular/fire/auth';

export class Usuario {
    private auth : Auth = inject(Auth);

    constructor(mail :string,contraseña:string){
    this.mail=mail;
    this.contraseña = contraseña;
    }

  public mail: string = "";

  public contraseña: string = "";

  async loginConFirebase(): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth,this.mail, this.contraseña);
      return true;
    } catch (error) {
        console.log(error);
      return false;
    }
  }

  async registrarUsuario(): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(this.auth,this.mail, this.contraseña);
      return true;
    } catch (error) {
        console.log(error);
      return false;
    }
  }
}