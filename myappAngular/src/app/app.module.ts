import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsModule } from './items/items.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
PageNotFoundModule,
    HomeModule,
    NgbModule.forRoot(),
    ItemsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
