(function() {
  'use strict';

  angular
    .module('angular')
    .controller('DashboardAdminController', DashboardController);

  /** @ngInject */
  function DashboardController() {
    let vm = this;

    vm.today = new Date();

    vm.projects = [
      {id: 1, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
      {id: 2, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
      {id: 3, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
      {id: 4, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
      {id: 5, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
      {id: 6, name: '草桥清真寺地库', xclsx: '管综方案审定', beginDate: '2017-01-06', sysx: '-3', xmzt: '延迟'},
    ];

    vm.news = [
      {id: 1, name: '张无忌', date: '2017/01/12 5:19 下午', info: '和我相关的动态，和我相关的动态和我相关的动态'},
      {id: 2, name: '张无忌', date: '2017/01/12 5:19 下午', info: '和我相关的动态，和我相关的动态和我相关的动态'},
      {id: 3, name: '张无忌', date: '2017/01/12 5:19 下午', info: '和我相关的动态，和我相关的动态和我相关的动态'},
    ];

    vm.info = {
      name: '张无忌',
      dept: '设计部',
      wddb: 12,
      gzxm: 2,
      dbrw: 4
    };

  }
})();
