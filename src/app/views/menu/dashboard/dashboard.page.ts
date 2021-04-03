import {Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {ChartOptions} from '../../../interfaces/data.interface';
import {ChartComponent} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      labels: ['Campo1', 'Campo2', 'Campo3', 'Campo4', 'Campo5'],
      chart: {
        type: 'donut'
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: null
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            // chart: {
            //   width: 380
            // },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      plotOptions: {
        pie: {
          startAngle: 0,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          donut: {
            size: '90%',
            background: 'white',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: 'red',
                offsetY: -10,
                formatter(val) {
                  return val;
                }
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                color: undefined,
                offsetY: 16,
                formatter(val) {
                  return  '$ ' + val;
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Saldos Bancarios',
                fontSize: '18px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: 'red',
                formatter(w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      }
    };
  }
}
