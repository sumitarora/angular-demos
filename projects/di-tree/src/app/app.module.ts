import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DI_TREE_COMPONENTS } from './app.components';
import { DI_TREE_SERVICES } from './app.services';

@NgModule({
  declarations: [
    AppComponent,
    ...DI_TREE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [...DI_TREE_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
