import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit {
  backgroundColor: string[] = ['#719CFA', '#5DDE99', '#F5F573', '#DEA15D', '#FF6BAB' ]
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 350, 450, 100 ], backgroundColor: ['#719CFA', '#5DDE99', '#F5F573', '#DEA15D', '#FF6BAB' ]  },
    ]
  };
  
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {
  
    // this.graficaService.getUserRedSocial()
    //   .subscribe( data => {
        
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartData.labels = labels
    //     this.doughnutChartData.datasets.push({ data: values, backgroundColor: ['#719CFA', '#5DDE99', '#F5F573', '#DEA15D', '#FF6BAB' ]  })
    //     console.log(labels)
    //     console.log(values)
    //     console.log(this.doughnutChartData)
    //   })

    this.graficaService.getRedSocialData()
      .subscribe( ({labels, values }) => {
        this.doughnutChartData.labels = labels
        this.doughnutChartData.datasets.push({ data: values, backgroundColor: this.backgroundColor })
      })
  }

   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
