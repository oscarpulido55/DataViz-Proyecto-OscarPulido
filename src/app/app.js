angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controllerAs: 'main',
    controller($http, jmespath, moment, _) {

      // Reference: http://krispo.github.io/angular-nvd3/#/quickstart
      this.hello = 'Hello Student!';

      this.callback = function() { }

      this.options = {
        chart: {
          type: 'discreteBarChart',
          height: 200,
          margin : {
            top: 10,
            bottom: 30,
            right: 10,
            left: 10
          },
          x: (d) => { return d.label; },
          y: function(d){ return d.value; },
          showValues: true,
          valueFormat: function(d) { return d3.format(',.4f')(d); },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
          }
        }
      };

      let rawData = [
        { "label" : "A" , "value" : -29.765957771107 },
        { "label" : "B" , "value" : 0 },
        { "label" : "C" , "value" : 32.807804682612 },
        { "label" : "D" , "value" : 196.45946739256 },
        { "label" : "E" , "value" : 0.19434030906893 },
        { "label" : "F" , "value" : -98.079782601442 },
        { "label" : "G" , "value" : -13.925743130903 },
        { "label" : "H" , "value" : -5.1387322875705 }
      ]

      this.data = [{
        key: "Cumulative Return",
        values: rawData
      }]

    }
  });
