/**
 * @author Megan Castleton <megan.castleton@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2019
 */
import { Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'al-highchart-treemap',
  templateUrl: './al-highchart-treemap.component.html',
  styleUrls: ['./al-highchart-treemap.component.scss']
})
export class AlHighchartTreeMapComponent implements OnInit {

  public map: any;

  @ViewChild('treeMap') treeMap: ElementRef;
  /**
   * Input to populate the graph - set to 'any' until backend is defined, allowing us to build
   * an interface
   */
  @Input() config: any;

  ngOnInit() {
    this.map = Highcharts.chart(this.treeMap.nativeElement, {
      chart: {
        styledMode: true
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: this.config.layoutAlgorithm || 'strip',
        levels: [{
          level: 1,
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            style: {
              fontSize: '15px',
              fontWeight: 'bold',
              textOutline: '0px',
              color: 'white'
            }
          },

        }],
        tooltip: {
          // tslint:disable-next-line
          pointFormatter: function () {
            return this.value;
          },
        },
        data: this.config.data,
      }],
      credits: {
        enabled: false
      },
      title: {
        text: ''
      }
    });
  }
}
