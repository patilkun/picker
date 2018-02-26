import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-candle-stick-chart',
  templateUrl: './candle-stick-chart.component.html',
  styleUrls: ['./candle-stick-chart.component.css']
})
export class CandleStickChartComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;	
  constructor() { }

  ngOnInit() {
  	this.basicChart()
  }

  basicChart() {
    const element = this.el.nativeElement

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot( element, data, style )
  }

}
