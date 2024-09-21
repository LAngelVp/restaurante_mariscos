import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.sass'
})
export class ProductoComponent {
  @Input() listaPlatillos: any[] = [];

  

}
