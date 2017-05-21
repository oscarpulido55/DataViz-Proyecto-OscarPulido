/* global moment:false */
/* global jmespath:false */
/* global _:false */

angular
  .module('app', ['ui.router', 'ui.bootstrap'])
  .constant('moment', moment)
  .constant('jmespath', jmespath)
  .constant('_', _);
