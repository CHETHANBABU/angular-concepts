import { Component, OnInit, Input, ViewChild } from '@angular/core';
import 'd3';
import 'nvd3';

@Component({
  selector: 'stackbar',
  templateUrl: './stackbar.component.html',
  styleUrls: ['./stackbar.component.css']
})
export class StackbarComponent implements OnInit {
  data: any
  options: any;
  @Input() stackBarData: any;
  @ViewChild('nvd3') nvd3;
  heading: string = 'Stacked Bar Chart';
  title: string = 'Yearly Member Details'

  constructor() { }

  ngOnInit() {
    this.data = this.stackBarData;
    let that = this;
    this.options = {
      chart: {
          type: 'multiBarChart',
          height: 300,
          margin : {
              top: 20,
              right: 20,
              bottom: 45,
              left: 45
          },
          clipEdge: false,
          groupSpacing: 0.4,
          x: function(d){ return d.name; },
          y: function(d){ return d.value + (1e-10); },
          duration: 500,
          grouped: false,
          stacked: true,
          legendPosition: 'bottom', 
          showControls: false,
          xAxis: {
              axisLabel: 'Years',
              showMaxMin: false,
              tickFormat: function(d){
                  // return d3.format(',.0f')(d);
                  return d;
              }
          },
          yAxis: {
              axisLabel: 'No. of Members',
              axisLabelDistance: -20,
              tickFormat: function(d){
                  return d3.format(',.0f')(d);
              }
          },
          //To Display Chart Values
          dispatch: {
              stateChange: function (e) {
                  that.options.chart.xAxis.tickFormat();
              },
    
            renderEnd: function (d) {
                  d3.selectAll('.nv-multibar .nv-group').each(function () {
                      var g = d3.select(this);
                      // Remove previous labels if there is any
                      g.selectAll('text').remove();
                      g.selectAll('.nv-bar').each(function (bar) {
                          var b = d3.select(this);
                          var barWidth = b.attr('width');
                          var barHeight = b.attr('height');
    
                          g.append('text')
                              // Transforms shift the origin point then the x and y of the bar
                              // is altered by this transform. In order to align the labels
                              // we need to apply this transform to those.
                              .attr('transform', b.attr('transform'))
                              .text(function () {
                                  // No decimals format and eliminate zero values
                                  if (bar.y === 0) {
                                      return;
                                  }
                                  return parseFloat(bar.y).toFixed(0);
                              })
                              .attr('y', function () {
                                  // Center label vertically
                                  const height = this.getBBox().height;
                                  // return parseFloat(b.attr('y')) + 5; // 11 is the label's margin from the top of bar
                                  return parseFloat(b.attr('y')) + (parseFloat(barHeight) / 2) + 10;
                              })
                              .attr('x', function () {
                                  // Center label horizontally
                                  var width = this.getBBox().width;
                                  return parseFloat(b.attr('x')) + (parseFloat(barWidth) / 2) - (width / 2);
                              })
                              .style("stroke", "#000");
                              // .attr('class', 'bar-values');
                      });
                  });
              }
        },
        //To get the Event Details
        multibar:{
          dispatch:{
            elementClick:function(el){
              console.log("Element Click",el);
            }
          }
        },
        //For Color Change function
        // color:function(d,i){
        //   return colorArray[i];
        // }
  
        }
      }
  }

  ngOnChanges(){
    this.data = this.stackBarData;
  }

}
