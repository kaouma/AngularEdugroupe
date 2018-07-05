import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, ItemComponentComponent, StateDirective, FormComponent],
  exports: [NavComponent, ItemComponentComponent, StateDirective, FormComponent]
})
export class SharedModule { }
