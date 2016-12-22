(function() {

	'use strict';

	angular
		.module('quizApp')
		.controller('resultCtrl', resultController);

		resultController.$inject = ['quizMetrics', 'DataService'];


		function resultController(quizMetrics, DataService) {

			var vm = this;
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
			vm.getAnswerClass = getAnswerClass;
			vm.setActiveQuestion = setActiveQuestion;
			vm.calculatePercentage = calculatePercentage;
			vm.reset = reset;

			vm.activeQuestion = 0;


			function getAnswerClass(index) {
				if(index === quizMetrics.correctAnswers[vm.activeQuestion]) {
					return 'answered-correct';
				}
				else if(index === DataService.htmlQuizQuestions[vm.activeQuestion].selected) {
					return 'answered-incorrect'
				}
			}


			function setActiveQuestion(index) {
				vm.activeQuestion = index;
			}

			function calculatePercentage() {
				return quizMetrics.numCorrect / DataService.htmlQuizQuestions.length * 100;
			}

			function reset() {
				quizMetrics.changeState('result', false);
				quizMetrics.numCorrect = 0;

				for (var i = 0; i < DataService.htmlQuizQuestions.length; i++) {
					var data = DataService.htmlQuizQuestions[i];

					data.selected = null;
					data.correct = null;
				}
			}

		}


})();