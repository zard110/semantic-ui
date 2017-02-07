(function() {
  'use strict';

  angular
    .module('angular')
    .controller('TaskController', TaskController);

  /** @ngInject */
  function TaskController() {
    var vm = this;

    vm.task = {
      id: 1,
      name: '调查相邻土地权属',
      type: '调查',
      level: '一般',
      state: '0',
      beginDate: '2016/12/28',
      endDate: '2017/01/12',
      result: '进行中'
    };

  }
})();
