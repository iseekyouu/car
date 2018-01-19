/**
 * Created by anatoly on 19.01.18.
 */
angular.module('core.goods').
    factory('Goods', ['$resource', 
      function($resource){
        return $resource('/api/items.json', {}, {
          query: {
            method: 'GET',
            isArray: true
          }  
        })
      }] 
    )