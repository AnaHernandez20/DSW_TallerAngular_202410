import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list.component';

@NgModule({
  //imports cuyo valor es un arreglo de los nombres de los módulos que necesita
  imports: [
    CommonModule
  ],
  //declarations cuyo valor también es un arreglo de los nombres de los componentes que declara
  //Tiene la declaración del componente que se crea por defecto al crear un módulo.
  declarations: [SerieListComponent],
  //Para que el componente SeriesComponent que declara el módulo SeriesModule, 
  //sea visible desde la vista del componente AppComponent, SeriesModule debe exportarlo
  exports:[SerieListComponent]
})
export class SerieModule { }
