(function() {
  'use strict';

  angular
    .module('angular')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($state, $uibModal) {
    let vm = this;

    // TODO 先简单的判断
    vm.isAdmin = $state.current.name.indexOf('admin') > -1;

    // 切换管理员状态
    vm.changeAdmin = changeAdmin;

    // 添加项目
    vm.addProject = addProject;

    function addProject() {
      let modalInstance = $uibModal.open({
        templateUrl: 'app/modules/project/project.add.html',
        controller: 'ProjectAddController',
        controllerAs: 'vm',
        size: 'lg'
      });

      // 新增项目后跳到项目管理页面
      modalInstance.result.then(function(project) {
        $state.go('root.project.manager', {
          id: project.id
        });
      });
    }

    function changeAdmin(flag) {
      if (vm.isAdmin === flag) return;

      vm.isAdmin = flag;

      flag ? $state.go('root.dashboard.admin') : $state.go('root.dashboard.user');
    }
  }
})();
