import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html'
})
export class Exercice3Component {
  public statut: boolean = true;

  public changeStatut(): void {
    this.statut = !this.statut;
 }
}
