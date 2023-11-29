import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertylistComponent } from './property/propertylist/propertylist.component';
import { PropertycardComponent } from './property/propertycard/propertycard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertylistComponent,
    PropertycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
