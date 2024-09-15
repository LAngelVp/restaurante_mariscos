import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-special-dishes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './special-dishes.component.html',
  styleUrl: './special-dishes.component.sass'
})
export class SpecialDishesComponent {
  listaEspecialidades : any[] = [
    {
      nombre : 'Pescado a la Naranja',
      descripcion : 'Pescado en salsa de naranja con toques de jengibre y cilantro. Delicioso y vibrante.',
      imagen : '../../../assets/images/c1.jpg'
    },
    {
      nombre : 'Pescado Asado',
      descripcion : ' Pescado asado con hierbas frescas y limón. Tierno, jugoso y lleno de sabor.',
      imagen : '../../../assets/images/c2.jpg'
    },
    {
      nombre : 'Filete de Pescado con Verdura',
      descripcion : 'Filete de pescado servido con verduras al vapor y salsa ligera de limón. Saludable y sabroso.',
      imagen : '../../../assets/images/c3.jpg'
    }
  ];

}
