(function() {

	'use strict';

	angular
		.module('quizApp')
		.controller('homeCtrl', homeController)

		homeController.$inject = ['quizMetrics','DataService'];


		function homeController(quizMetrics, DataService) {

			var vm = this;
			vm.quizMetrics = quizMetrics;
	
			vm.activateQuiz = activateQuiz;

			function activateQuiz() {
				quizMetrics.changeState('htmlQuiz', true);
			}
			

		}

})();