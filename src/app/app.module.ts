import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Aquí importo el módulo de series
import { SerieModule } from './serie/serie.module';

//Debemos también hacer una importación del módulo en el módulo principal de la aplicación
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],

  //El módulo que importa otro podrá "ver" los elementos que el módulo exporta
  imports: [
    BrowserModule,
    SerieModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
