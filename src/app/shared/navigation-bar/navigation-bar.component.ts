import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
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
    },
    {
      nombre : 'Contacto',
      path : ''
    },
  ];

  @ViewChild('barra_navegacion') burger!: ElementRef;
  @HostListener('document: click', ['$event'])
  clic_opcion(event : Event){
    if (this.burger.nativeElement.classList.contains('show')){
      this.burger.nativeElement.classList.remove('show');
    }
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

}
