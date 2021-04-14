import {Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {
  _cobranzaHistorica,
  _dashboard,
  _flujoDeCajaMensualBioethik,
  _saldosBancarios,
  ChartOptions
} from '../../../interfaces/data.interface';
import {ChartComponent} from 'ng-apexcharts';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  fcmPrecupuesto: _flujoDeCajaMensualBioethik;
  fcmReal: _flujoDeCajaMensualBioethik;
  cobranzaHistorica: _cobranzaHistorica;
  saldosBancarios: _saldosBancarios;
  totalBancario = 0;
  dominio = 'Tablero';

  constructor(private restService: RestService, private screenOrientation: ScreenOrientation) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

// set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
//     this.screenOrientation.unlock();

// detect orientation changes
    this.restService.initService(this.dominio);
    this.restService.index<_dashboard>( {}, 'dashboard').subscribe(result => {
      this.fcmPrecupuesto = result.flujoDeCajaMensual.presupuesto[0];
      this.fcmReal = result.flujoDeCajaMensual.real[0];
      this.cobranzaHistorica = result.cobranzaHistorica;
      this.saldosBancarios = result.saldosBancarios;
      // this.metas = result.metas;

      // @ts-ignore
      // for (let mes of this.cobranzaHistorica){
      //   this.barChart2Options.series[0].data.push(mes.monto)
      // }

      // @ts-ignore
      for (const saldo of this.saldosBancarios){
        this.totalBancario = this.totalBancario + saldo.saldo;
        this.chartOptions.series.push(saldo.saldo);
        this.chartOptions.labels.push(saldo.banco);
      }
      console.log(this.totalBancario);

    });
    // this.chartOptions = {
    //   series: [],
    //   labels: [],
    //   chart: {
    //     type: 'donut'
    //   },
    //   dataLabels: {
    //     enabled: false,
    //     enabledOnSeries: null
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 400,
    //       options: {
    //         chart: {
    //           width: '50%'
    //         },
    //         // legend: {
    //         //   position: 'bottom'
    //         // }
    //       }
    //     }
    //   ],
    //   plotOptions: {
    //     pie: {
    //       startAngle: 0,
    //       expandOnClick: true,
    //       offsetX: 0,
    //       offsetY: 0,
    //       customScale: 1,
    //       donut: {
    //         size: '90%',
    //         background: 'white',
    //         labels: {
    //           show: true,
    //           name: {
    //             show: true,
    //             fontSize: '22px',
    //             fontFamily: 'Helvetica, Arial, sans-serif',
    //             fontWeight: 600,
    //             color: 'red',
    //             offsetY: -10,
    //             formatter(val) {
    //               return val;
    //             }
    //           },
    //           value: {
    //             show: true,
    //             fontSize: '16px',
    //             fontFamily: 'Helvetica, Arial, sans-serif',
    //             fontWeight: 700,
    //             color: undefined,
    //             offsetY: 16,
    //             formatter(val) {
    //               return  '$ ' + val;
    //             }
    //           },
    //           total: {
    //             show: true,
    //             showAlways: true,
    //             label: 'Saldos Bancarios',
    //             fontSize: '18px',
    //             fontFamily: 'Helvetica, Arial, sans-serif',
    //             fontWeight: 600,
    //             color: 'red',
    //             formatter(w) {
    //               return w.globals.seriesTotals.reduce((a, b) => {
    //                 return a + b;
    //               }, 0);
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // };

    this.chartOptions = {
      series: [],
      labels: [],
      chart: { type: 'donut' },
      dataLabels: { enabled: false, enabledOnSeries: null },
      responsive: [ { breakpoint: 800, options: {  legend: { position: 'top' } } } ],
      plotOptions: {
        pie: {
          startAngle: 0,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          donut: {
            size: '80%',
            background: 'white',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: 'black',
                offsetY: -10,
                formatter(val) {
                  return val ;
                }
              },
              value: {
                show: true,
                fontSize: '18px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                color: undefined,
                offsetY: 16,
                formatter(val) {
                  return  '$ ' + formatNumber(Number(val), 'en-US');
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Saldos Bancarios',
                fontSize: '18px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: 'black',
                formatter(w) {
                  return '$ ' + formatNumber( w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0), 'en-US');
                }
              }
            }
          }
        }
      }
    };
  }
}
