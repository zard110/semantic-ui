(function() {
  'use strict';

  angular
    .module('angular')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $state) {
    let vm = this;

    vm.user = {};

    vm.login = login;


    function login() {
      let userName = vm.user.username;

      if (!userName) return;
      $rootScope.userName = userName;

      if ('admin' === userName) {
        $state.go('root.dashboard.admin');
      }
      else {
        $state.go('root.dashboard.user');
      }

    }
  }
})();
