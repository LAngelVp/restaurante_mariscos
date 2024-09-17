import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  comentarios: any[] = [
    {
      nombre: 'Juan',
      comentario: 'Este es un comentario muy interesante.'
    },
    {
      nombre: 'María',
      comentario: 'Gracias por la información, me ha sido útil.'
    },
    {
      nombre: 'Pedro',
      comentario: 'Me gustaría saber más sobre este tema.'
    },
    {
      nombre: 'Ana',
      comentario: 'Buen trabajo, pero hay algunos errores que se pueden mejorar.'
    },
    {
      nombre: 'Luis',
      comentario: 'Excelente explicación, muy clara y concisa.'
    }
  ];

  constructor() { }

  obtenerComentarios(): Observable<any>{
    return of(this.comentarios);
  }
}
