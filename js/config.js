(function(){

	'use strict';

	angular
		.module('quizApp')
		.config(function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/home');

				$stateProvider
						.state('home', {
							url: '/home',
							templateUrl: '../templates/home.html'
						})
						.state('about', {
							url: '/about',
							templateUrl: '../templates/about.html'
						});
		});

})();