/**
 * Created by anatoly on 19.01.18.
 */
angular.module('menu')
  .component('menu', {
    templateUrl: 'menu/menu.template.html',
    controller: [
      function menuController() {
        this.items = [
          {
            name: 'items',
            path: '/items'
          }, {
            name: 'orders',
            path: '/orders'
          }, {
            name: 'count',
            path: '/count'
          }, {
            name: 'delivery',
            path: '/delivery'
          }
        ];
      }
    ]
  })