import { Component, OnInit, Input, OnChanges } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit,  OnChanges{
  @Input('gaugeData') gaugeData;
  r = 100;
  o = 70;
  g = 100;
  arcWidth = 1.0;
  gauge : any;

  constructor() { }

  ngOnInit() {
  this.gauge = this.gaugeData;
  console.log("Gauge", this.gauge);
  }

  // gauge function
  gaugefunction(container, configuration) {
      var that = {
          update,
          isRendered,
          render,
          configure
      };
      var padRad = 0.00;
      // let red = this.r / 100;
      // let orange = this.o / 100;
      // let grey = this.g;
      let red = this.r / 100;
      let orange = this.o / 100;
      let green = this.g / 100;
      var config = {
          size: 480,
          // clipWidth: 350,
          // clipHeight: 310,
          ringInset: 20,
          ringWidth: 80,
          pointerWidth: 8,
          pointerTailLength: 3,
          pointerHeadLengthPercent: 0.7,
          minValue: 0,
          maxValue: 10,
          minAngle: -110,
          maxAngle: 110,
          transitionMs: 10,
          majorTicks: 5,
          minorTicks: 1000,
          labelFormat: d3.format(',g'),
          labelInset: 15,
          arcColorFn: d3.scale.threshold()
              .domain([red])
              .range(["#bf0000", " #ff6501", " #35a147"])
      };
      var range = undefined;
      var r = undefined;
      var pointerHeadLength = undefined;
      var value = 0;
      var svg = undefined;
      var arc = undefined;
      var scale = undefined;
      var ticks = undefined;
      var tickData = undefined;
      var pointer = undefined;
      var pointer1 = undefined;
      var pointer2 = undefined;
      var donut = d3.layout.pie();
      function deg2rad(deg) {
          return deg * Math.PI / 180;
      }
      function newAngle(d) {
          var ratio = scale(d);
          var newAngle = config.minAngle + (ratio * range);
          return newAngle;
      }
      function configure(configuration) {
          var prop = undefined;
          for (prop in configuration) {
              config[prop] = configuration[prop];
          }
          range = config.maxAngle - config.minAngle;
          r = config.size / 2;
          pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);
          scale = d3.scale.linear()
              .range([0, 1])
              .domain([config.minValue, config.maxValue]);
          ticks = scale.ticks(config.majorTicks, config.minorTicks);
          tickData = d3.range(config.majorTicks, config.minorTicks).map(function () {
              return 1 / config.minorTicks;
          });
          arc = d3.svg.arc()
              .innerRadius(r - config.ringWidth - config.ringInset)
              .outerRadius(r - config.ringInset)
              .startAngle(function (d, i) {
                  var ratio = d * i + padRad;
                  return deg2rad(config.minAngle + (ratio * range));
              })
              .endAngle(function (d, i) {
                  var ratio = d * (i + 1);
                  return deg2rad(config.minAngle + (ratio * range));
              });
      }
      that.configure = configure;
      function centerTranslation() {
          return 'translate(' + r + ',' + r + ')';
      }
      function isRendered() {
          return (svg !== undefined);
      }
      that.isRendered = isRendered;

      function render() {
          svg = d3.select(container)
              .append('svg:svg')
              .attr('class', 'gauge');
          svg.style.width = '500px';
          svg.style.height = '300px';
          var centerTx = centerTranslation();
          var arcs = svg.append('g')
              .attr('class', 'arc')
              .attr('transform', centerTx);
          arcs.selectAll('path')
              .data(tickData)
              .enter().append('path')
              .attr('fill', function (d, i) {
                  return config.arcColorFn(d * (i));
              })
              .attr('d', arc);
          var lg = svg.append('g')
              .attr('class', 'label')
              .attr('transform', centerTx);
          lg.selectAll('text')
              .data(ticks)
              .enter().append('text')
              .attr('transform', function (d) {
                  var ratio = scale(d);
                  var newAngle = config.minAngle + (ratio * range);
                  var newAngle1 = config.minAngle + (ratio * range);
                  var newAngle2 = config.minAngle + (ratio * range);

                  return 'rotate(' + newAngle + ') translate(0,' + (config.labelInset - r) + ')', 'rotate(' + newAngle1 + ') translate(0,' + (config.labelInset - r) + ')', 'rotate(' + newAngle2 + ') translate(0,' + (config.labelInset - r) + ')';
              })
              .text(config.labelFormat);
          var lineData = [
              [config.pointerWidth / 2, 0],
              [0, -pointerHeadLength],
              [-(config.pointerWidth / 2), 0],
              [0, config.pointerTailLength],
              [config.pointerWidth / 2, 0]
          ];
          var pointerLine = d3.svg.line().interpolate('monotone');
          var pg = svg.append('g').data([lineData])
              .attr('class', 'pointer')
              .attr('transform', centerTx);
          pointer = pg.append('path')
              .attr('d', pointerLine)
              .attr('transform', 'rotate(' + config.minAngle + ')')
              .attr('fill', '#008000');
          pointer1 = pg.append('path')
              .attr('d', pointerLine)
              .attr('transform', 'rotate(' + config.minAngle + ')')
              .attr('fill', '#FF0000');
          pointer2 = pg.append('path')
              .attr('d', pointerLine)
              .attr('transform', 'rotate(' + config.minAngle + ')')
              .attr('fill', '#FF8C00');

      }
      that.render = render;
      function update(newValue, newValue1, newValue2) {
          var ratio = scale(newValue);
          var ratio1 = scale(newValue1);
          var ratio2 = scale(newValue2);
          var newAngle = config.minAngle + (ratio * range);
          var newAngle1 = config.minAngle + (ratio1 * range);
          var newAngle2 = config.minAngle + (ratio2 * range);
          pointer.transition()
              .duration(config.transitionMs)
              .ease('elastic')
              .attr('transform', 'rotate(' + newAngle + ')');
          pointer1.transition()
              .duration(config.transitionMs)
              .ease('elastic')
              .attr('transform', 'rotate(' + newAngle1 + ')');
          pointer2.transition()
              .duration(config.transitionMs)
              .ease('elastic')
              .attr('transform', 'rotate(' + newAngle2 + ')');
      }
      that.update = update;
      configure(configuration);
      return that;
  }

  ngOnChanges(){
      this.gauge = this.gaugeData;
      var design = {
          size: 300,
          clipWidth: 250,
          clipHeight: 200,
          ringWidth: 60,
          maxValue: 100,
          transitionMs: 4000
      }
      setTimeout(()=>{
        this.gauge.forEach(obj => {
            var temp = this.gaugefunction(obj.div, design);
            temp.render();
            temp.update(obj.cw, obj.pw, obj.tw);
        })
      }, 0)
     
  }

  

}
