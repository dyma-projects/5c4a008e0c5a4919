import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html'
})
export class Exercice1Component {
  public title: string = "Exercice 1";
  public link: string = "https://dyma.fr";
  public text: string = "";

  public showText() {
    this.text = "J'apprends Angular !!!"
;  }

}
