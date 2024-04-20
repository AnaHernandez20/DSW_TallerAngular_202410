//En MVC hace de controlador 

//Se importa la interface OnInit
//Esta interface define la función ngOnInit() que se llamará cada vez que se cree el componente
import { Component, OnInit } from '@angular/core';

//Importo mi clase Serie
import { Serie } from './serie';

//Si hiciera las Series manualmente (lo cual hago primero para guiarme) tengo que importar sus datos
import { dataSeries } from './dataSeries';

//Como no las voy a hacer manualmente, tengo que usar el servicio que creé
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})

export class SerieListComponent implements OnInit {

   //Para poder usar el servicio en el componente necesitamos declararlo en el constructor e importar el archivo
   constructor(private serieService: SerieService) { }

   //Mi arreglo de Series
   series: Array<Serie> = [];

   //Promedio de las temporadas
   promedioSeasons: number = 0;

   //Método público que retornará la lista de series
   //Un Observable tiene una función de suscripción, esto significa que quien llama al observable, se suscribe a él.
    getSeries(){this.serieService.getSeries().subscribe(series => {
      //tiene como parámetro el resultado del método asíncrono y en el cuerpo de la función lo que queremos hacer con ese resultado
      this.series = series;

      this.calcularPromedio(); // Esto debo llamarlo aquí para que 'series' en efecto exista
    });
    }

    calcularPromedio(){
      let sumaSeasons = 0; 

      //Saco la suma de temporadas de las series
      for (let serie of this.series) {
        sumaSeasons += serie.seasons;
      }

      //No divido entre 0 o negativos y saco el promedio 
      this.promedioSeasons = this.series.length > 0 ? sumaSeasons / this.series.length : 0;
    }


  ngOnInit() {
    this.getSeries();
  }

}

