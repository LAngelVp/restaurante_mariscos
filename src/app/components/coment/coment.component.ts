import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CommentServiceService } from '../../services/comment-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coment',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './coment.component.html',
  styleUrl: './coment.component.sass'
})
export class ComentComponent implements OnInit {

  listaComentarios: any[] = [];
  grupoComentarios: any[][] = [];
  cantidadCarta: number = 3; // Default to 2 for larger screens

  constructor(private comentarios: CommentServiceService) { }

  ngOnInit(): void {
    this.comentarios.obtenerComentarios().subscribe(dataComentarios => {
      this.listaComentarios = dataComentarios;
      this.actualizarGrupoCartas();
    });
  }

  @HostListener('window:resize', ['$event'])
  redimencionarPantalla(event: Event) {
    this.actualizarCantidadCartas();
    this.actualizarGrupoCartas();
  }

  actualizarCantidadCartas() {
    const tamañoPantalla = window.innerWidth;
    this.cantidadCarta = tamañoPantalla < 768 ? 1 : this.cantidadCarta;
  }

  actualizarGrupoCartas() {
    this.grupoComentarios = [];
    this.actualizarCantidadCartas();
    for (let i = 0; i < this.listaComentarios.length; i += this.cantidadCarta) {
      this.grupoComentarios.push(this.listaComentarios.slice(i, i + this.cantidadCarta));
    }
  }

}
