import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';
import { MenuServiceService } from '../../services/menu-service.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ProductoComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent implements OnInit {

  lista_platillos : any[] = [];

  constructor(private platillos : MenuServiceService){}

  ngOnInit(): void {
    this.platillos.obtener_platillos().subscribe(data => {
      this.lista_platillos = data;
    });
  }
}
