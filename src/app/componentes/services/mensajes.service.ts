import { Injectable } from '@angular/core';
import { Firestore,collection, collectionData, query,getDocs,orderBy,limit } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  constructor(private firestore: Firestore) {}

  obtenerMensajesDelChat() : Promise<any>{
    const col = collection(this.firestore, 'mensajes');
    const querySorted = query(col, orderBy('fechaYHora', 'asc'), limit(30));
    
    return getDocs(querySorted)
    .then((querySnapshot) => {
        const mensajesArray: { mensaje: any; fechaYHora: any; usuario: any; }[] = [];
        
        querySnapshot.forEach((doc) => {
            const mensaje = doc.data();
            const mensajeFormateado = {
                mensaje: mensaje['mensaje'],
                fechaYHora: this.convertDate(mensaje['fechaYHora']),
                usuario: mensaje['usuario'],
            };
            mensajesArray.push(mensajeFormateado);
        });
        return mensajesArray;
    })
    .catch((error) => {
        console.error('Error al obtener datos:', error);
    });
    
    }


    convertDate(fecha: any) {
        const date = new Date(fecha.seconds * 1000);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day} - ${hours}:${minutes}HS`;
        
        return formattedDate;
  }
}
