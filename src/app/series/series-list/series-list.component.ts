import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series : Array<Series> = [];
  seasonsAverage: number = 0;
  constructor(private seriesService: SeriesService) { }

  getSeries(): void{
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      let totalSeasons = 0;
      let addSeasons = 0;
      series.forEach((series) => addSeasons = addSeasons + series.seasons,
      totalSeasons = totalSeasons + 1);
      this.seasonsAverage = addSeasons / totalSeasons;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}