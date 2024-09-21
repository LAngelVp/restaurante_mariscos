import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  lista_producto : any[] = [
    {
      id: 1,
      nombre: 'Pescado a la naranja',
      precio: 100,
      descripcion: 'Pescado asado a la perfección, adornado con frescas rodajas de naranja.',
      imagen: "../../assets/images/c1.jpg"
    },
    {
      id: 1,
      nombre: 'Mojarra frita',
      precio: 100,
      descripcion: 'Mojarra frita, crujiente y sabrosa, acompañada de coloridas verduras.',
      imagen: "../../assets/images/c2.jpg"
    },
    {
      id: 1,
      nombre: 'Fileres de pescado',
      precio: 100,
      descripcion: 'Fileres de mojarra, tiernos y jugosos, con verduras frescas.',
      imagen: "../../assets/images/c3.jpg"
    },
    {
      id: 1,
      nombre: 'caldillo de mariscos',
      precio: 100,
      descripcion: 'Mariscos frescos en salsa verde, con un toque picante y aromático.',
      imagen: "../../assets/images/c4.jpg"
    },
    {
      id: 1,
      nombre: 'Cazuela de mariscos',
      precio: 100,
      descripcion: 'Cazuela de mariscos, un festín caldoso con sabores intensos y frescura.',
      imagen: "../../assets/images/c5.jpg"
    },
    {
      id: 1,
      nombre: 'Caldo de mariscos',
      precio: 100,
      descripcion: 'Caldo de mariscos, lleno de sabor, con camarones, mejillones y pescado fresco.',
      imagen: "../../assets/images/c6.jpg"
    },
    {
      id: 1,
      nombre: 'Platillo de camarones',
      precio: 100,
      descripcion: 'Camarones jugosos, salteados con especias, servidos en salsa deliciosa.',
      imagen: "../../assets/images/c7.jpg"
    },
    {
      id: 1,
      nombre: 'Camarones central',
      precio: 100,
      descripcion: 'Camarones central, salteados con chile y ajo, servidos en su jugo.',
      imagen: "../../assets/images/c8.jpg"
    },
    {
      id: 1,
      nombre: 'Coctel de camarón',
      precio: 100,
      descripcion: 'Cóctel de camarón, fresco y vibrante, con salsa picante y aguacate.',
      imagen: "../../assets/images/c9.jpg"
    },
    {
      id: 1,
      nombre: 'Brochetas de mariscos',
      precio: 100,
      descripcion: 'Brochetas de mariscos, grilladas a la perfección, llenas de sabor y jugosidad.',
      imagen: "../../assets/images/c10.jpg"
    },
    {
      id: 1,
      nombre: 'Filetes de pescado a la luigui',
      precio: 100,
      descripcion: 'Filetes de pescado a la Luigui, cubiertos con salsa cremosa y especiada.',
      imagen: "../../assets/images/c11.jpg"
    },
    {
      id: 1,
      nombre: 'Ensalada de pescado',
      precio: 100,
      descripcion: 'Ensalada de pescado, ligera y fresca, con trozos de pescado y verduras crujientes.',
      imagen: "../../assets/images/c2.jpg"
    },
    {
      id: 1,
      nombre: 'Chuleton de marisco',
      precio: 100,
      descripcion: 'Chuletón de marisco, jugoso y tierno, asado a la perfección con sabores intensos.',
      imagen: "../../assets/images/c13.jpg"
    },
  ];

  constructor() { }

  obtener_platillos():Observable<any[]>{
    return of(this.lista_producto);
  }
}
