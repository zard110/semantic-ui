(function() {
  'use strict';

  angular
    .module('angular')
    .controller('ProjectController', ProjectController);

  /** @ngInject */
  function ProjectController($state, $stateParams) {
    let vm = this;

    vm.projectId = $stateParams.projectId;

    // 项目任务
    vm.tasks = [
      {id: 1, name: '调查相邻土地权属', date: '2016-12-28', state: 0},
      {id: 2, name: '调整方案', date: '2016-12-28', state: 1},
      {id: 3, name: '与相关部门沟通', date: '2016-12-28', state: 2},
      {id: 4, name: '编制项目建议书 ', date: '2016-12-28', state: 0},
      {id: 5, name: '项目建议书批复', date: '2016-12-28', state: 1},
      {id: 6, name: '委托管线资料', date: '2016-12-28', state: 2},
    ];

    // 项目信息
    vm.project = {
      id: 1,
      name: '四方新村路改造',
      type: '道路改造',
      owner: '张三丰',
      date: '2015-12-26',
      stage: '环评报告',
      state: '正常'
    };

    // 如果有任务，跳转到第一个任务详情
    if (vm.tasks && vm.tasks.length) {
      $state.go('root.project.task', {
        projectId: vm.projectId,
        taskId: vm.tasks[0].id
      });
    }
  }
})();
