import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Item2Component } from './components/item2/item2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, ItemComponentComponent, StateDirective, FormComponent, Item2Component],
  exports: [NavComponent, ItemComponentComponent, StateDirective, FormComponent, Item2Component]
})
export class SharedModule { }
