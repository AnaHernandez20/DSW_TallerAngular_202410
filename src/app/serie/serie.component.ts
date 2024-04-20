import { Component, OnInit } from '@angular/core';

//Importo mi clase Serie
import { Serie } from './serie';

//Si hiciera las Series manualmente (lo cual hago primero para guiarme) tengo que importar sus datos
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  //Mi arreglo de Series
  series: Array<Serie> = [];

  constructor() { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  ngOnInit() {
  }

}
