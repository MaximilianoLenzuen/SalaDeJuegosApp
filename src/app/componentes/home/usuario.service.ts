import { inject,Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    private auth : Auth = inject(Auth);

    constructor(){

    }

  public mail: string = "";

  public contraseña: string = "";

  async loginConFirebase(mail :string,contraseña:string): Promise<boolean> {
    try {
      this.mail=mail;
      this.contraseña = contraseña;
      await signInWithEmailAndPassword(this.auth,this.mail, this.contraseña);
      return true;
    } catch (error) {
        console.log(error);
      return false;
    }
  }

  async registrarUsuario(mail :string,contraseña:string): Promise<boolean> {
    try {
      this.mail=mail;
      this.contraseña = contraseña;
      await createUserWithEmailAndPassword(this.auth,this.mail, this.contraseña);
      return true;
    } catch (error) {
        console.log(error);
      return false;
    }
  }

  async verificarUsuarioExistente(mail :string): Promise<boolean> {
    try {
      this.mail=mail;
      const methods = await fetchSignInMethodsForEmail(this.auth, this.mail);
      return methods.length > 0;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async desloggearUsuario(): Promise<boolean> {
    try {
      await this.auth.signOut();
      console.log('Usuario deslogueado con éxito');
      this.mail = '';
      this.contraseña = '';
      return true;
    } catch (error) {
      console.error('Error al desloguear:', error);
      return false;
    }
  }
}