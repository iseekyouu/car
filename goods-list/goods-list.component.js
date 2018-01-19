/**
 * Created by anatoly on 19.01.18.
 */
angular.
  module('goodsList').
    component('goodsList',{
      templateUrl: 'goods-list/goods-list.template.html',
      controller:['Goods',
        function itemsController(Goods){
          this.goods = Goods.query();
        }
      ]
    })