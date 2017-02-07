(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          header: {
            templateUrl: 'app/modules/commons/header.html',
            controller: 'HeaderController',
            controllerAs: 'vm'
          },

          footer: {
             templateUrl: 'app/modules/commons/footer.html'
          }
      }
    });

    $stateProvider
      .state('root.login', {
        url: '/login',
        views: {
          'main@': {
            templateUrl: 'app/modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          },
          'header@': '',
          'footer@': ''
        }
      });

    $stateProvider
      .state('root.dashboard', {
        url: '/dashboard',
        abstract: true
      });

    $stateProvider
      .state('root.dashboard.admin', {
        url: '/admin',
        views: {
          'main@': {
            templateUrl: 'app/modules/dashboard/dashboard.admin.html',
            controller: 'DashboardAdminController',
            controllerAs: 'vm'
          }
        }
      });

    $stateProvider
      .state('root.dashboard.user', {
        url: '/user',
        views: {
          'main@': {
            templateUrl: 'app/modules/dashboard/dashboard.user.html',
            controller: 'DashboardUserController',
            controllerAs: 'vm'
          }
        }
      });

    $stateProvider
      .state('root.project', {
        url: '/project/:projectId',
        views: {
          'main@': {
            templateUrl: 'app/modules/project/project.html',
            controller: 'ProjectController',
            controllerAs: 'vm'
          }
        }
      });

    $stateProvider
      .state('root.project.manage', {
        url: '/project/:projectId/manage',
        views: {
          'main@': {
            templateUrl: 'app/modules/project/project.manage.html',
            controller: 'ProjectManageController',
            controllerAs: 'vm'
          }
        }
      });

    $stateProvider
      .state('root.project.task', {
        url: '/project/:projectId/task/:taskId',
        views: {
          'main@': {
            templateUrl: 'app/modules/project/project.manage.html',
            controller: 'ProjectManageController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
