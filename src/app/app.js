angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controller() {
      this.hello = 'Hello World!';
    }
  });
