import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {
  listaOpciones : any[] = [
    {
      nombre : 'Inicio',
      path : ''
    },
    {
      nombre : 'Menu',
      path : '/menu'
    }
  ]

}
