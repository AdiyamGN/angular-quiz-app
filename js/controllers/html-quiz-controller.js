(function(){

	'use strict';

	angular
		.module('quizApp')
		.controller('htmlQuizCtrl', htmlQuizController);

		htmlQuizController.$inject = ['quizMetrics','DataService']

		function htmlQuizController(quizMetrics, DataService) {

			var vm = this;
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;

		}

})();