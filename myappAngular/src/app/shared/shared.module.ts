import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ItemComponentComponent, StateDirective],
  exports: [NavComponent, ItemComponentComponent, StateDirective]
})
export class SharedModule { }
