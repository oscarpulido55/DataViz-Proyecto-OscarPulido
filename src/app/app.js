angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controllerAs: 'main',
    controller($http, jmespath, moment, _) {

      // Reference $HTTP: https://www.w3schools.com/angular/angular_http.asp
      // Reference NVD3: http://krispo.github.io/angular-nvd3/#/quickstart

      this.hello = 'Proyecto final Vizualizacion de datos 2';
      this.greetings = 'Entrada de Extranjeros a Colombia Tercer trimestre 2016';
      this.author = 'Oscar Daniel Pulido Parra';

      this.callback = function() { }

      //Grafico 1
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7

      this.chart1 = {
        data: {
          id:1
        },
        options:{}
      };

      this.chart1.options = {
        chart: {
          type: 'pieChart',
          height: 450,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,

          pie: {
            startAngle: function(d) {return d.startAngle/2 -Math.PI/2 },
            endAngle: function(d) {return d.endAngle/2 -Math.PI/2 }
          },
          duration: 500,
          legend: {
            margin: {
              top: 5,
              right: 140,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      this.chart1.data = []

      $http.get("http://localhost:7001/data/chart1")
        .then((response) => {
          debugger
          this.chart1.data = response.data
        });

        //Grafico 2
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7

      this.chart2 = {
        data: {
          id:1
        },
        options:{}
      };

      this.chart2.options = {

          chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
      };

      this.chart2.data = []

      $http.get("http://localhost:7001/data/chart2")
        .then((response) => {
          this.chart2.data = response.data
        });
    }
  });
