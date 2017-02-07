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

    // 登录
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

    // 首页
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

    // 项目
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
        url: '/manage',
        views: {
          'main@': {
            templateUrl: 'app/modules/project/project.manage.html',
            controller: 'ProjectManageController',
            controllerAs: 'vm'
          }
        }
      });

    // 任务
    $stateProvider
      .state('root.project.task', {
        url: '/task/:taskId',
        views: {
          'task': {
            templateUrl: 'app/modules/task/task.html',
            controller: 'TaskController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
