import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html'
})
export class Exercice2Component {
  public showClick() : void {
    console.log("clic !")
  }
}
