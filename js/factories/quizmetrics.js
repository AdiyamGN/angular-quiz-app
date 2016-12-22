(function() {

	'use strict';

	angular
		.module('quizApp')
		.factory('quizMetrics', quizMetrics);

		quizMetrics.$inject = ['DataService'];


		function quizMetrics(DataService) {

			var quizObj = {

				quizActive: false,
				resultsActive: false,
				changeState: changeState,
				correctAnswers: [],
				markQuiz: markQuiz,
				numCorrect: 0

			};

			return quizObj;

			function changeState(metric, state) {
				if (metric === 'htmlQuiz') {
					quizObj.quizActive = state;
				}
				else {
					quizObj.resultsActive = state;
				}	
			}

			function markQuiz() {
				quizObj.correctAnswers = DataService.correctAnswers;
				for(var i = 0; i < DataService.htmlQuizQuestions.length; i++) {
					if(DataService.htmlQuizQuestions[i].selected === DataService.correctAnswers[i]) {
						DataService.htmlQuizQuestions[i].correct = true;
						quizObj.numCorrect++;
					}
					else {
						DataService.htmlQuizQuestions[i].correct = false;
					}
				}
			}

		}


})();