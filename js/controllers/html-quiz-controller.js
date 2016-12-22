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
			vm.setActiveQuestion = setActiveQuestion;
			vm.selectAnswer = selectAnswer;
			vm.finaliseAnswers = finaliseAnswers;
			vm.activeQuestion = 0;
			vm.questionAnswered = questionAnswered;
			vm.finilise = false;

			var numQuestionsAnswered = 0;

			function setActiveQuestion(index) {
				if(index === undefined) {
					var breakOut = false;
					var quizLength = DataService.htmlQuizQuestions.length - 1;

					while(!breakOut) {
						vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

						if(DataService.htmlQuizQuestions[vm.activeQuestion].selected === null) {
							breakOut = true;
						}
					}
				}
				else {
					vm.activeQuestion = index;
				}
				
			}

			function questionAnswered() {

				var quizLength = DataService.htmlQuizQuestions.length;

				if(DataService.htmlQuizQuestions[vm.activeQuestion].selected !== null) {
					numQuestionsAnswered++;
					if(numQuestionsAnswered >= quizLength) {
						// finilize quiz
						for (var i = 0; i < quizLength; i++) {
							if(DataService.htmlQuizQuestions[i].selected === null) {
								setActiveQuestion(i);
								return;
							}
						}
						vm.finilise = true;
						return;
					}
				}
				vm.setActiveQuestion()

			}

			function selectAnswer(index) {
				DataService.htmlQuizQuestions[vm.activeQuestion].selected = index;
			}

			function finaliseAnswers() {
				vm.finilise = false;
				numQuestionsAnswered = 0;
				vm.activeQuestion = 0;
				quizMetrics.markQuiz();
				quizMetrics.changeState('htmlQuiz', false);
				quizMetrics.changeState('results', true);
			}

		}

})();