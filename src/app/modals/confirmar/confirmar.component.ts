import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent {
  mensaje:string = "¿Está seguro de eliminar a este estudiante?"
}
