import { Directive, Input, OnInit, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit  {
@Input() appState: State;
@HostBinding('class') nomClass: string;
  constructor() { }


ngOnInit () {
  console.log(this.appState);
  this.nomClass = this.formatClass(this.appState);

}

  private removeAccents(etat: State): string {

return  etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  private formatClass(etat: State ): string {

return `state-${this.removeAccents(etat).toLowerCase().replace(/ /g, '' )}`;
  }
}
