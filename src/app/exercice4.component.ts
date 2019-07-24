import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  template: '<ul><li *ngFor = "let text of texts">{{text}}</li></ul>'
})
export class Exercice4Component {
  public texts: string[] = ["un","deux","trois"];
}
