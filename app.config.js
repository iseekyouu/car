/**
 * Created by anatoly on 19.01.18.
 */
angular.module('courierServiceApp')
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/items', {
            template: '<goods-list></goods-list>'
          }).
          when('/orders', {
            template: '<orders-list></orders-list>'
          }).
          otherwise('/items');
      }
    ])