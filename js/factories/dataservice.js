(function() {

	'use strict';

	angular
		.module('quizApp')
		.factory('DataService', DataService);



		function DataService() {
			var dataObj = {

				htmlQuizQuestions: htmlQuizQuestions,
				correctAnswers: correctAnswers

			};

			return dataObj;
		}

		var correctAnswers = [1, 3, 1, 1];

		var htmlQuizQuestions = [
				{
					type: "text",
					text: "How much can a loggerhead weigh?",
					possibilities: [
						{
							answer: "Up to 200lb"
						},
						{
							answer: "Up to 300lb"
						},
						{
							answer: "Up to 400lb"
						},
						{
							answer: "Up to 500lb"
						}
					],
					selected: null,
					correct: null
				},
				{
					type: "text",
					text: "Which of the following is a new HTML5 tag?",
					possibilities: [
						{
							answer: "div"
						},
						{
							answer: "head"
						},
						{
							answer: "table"
						},
						{
							answer: "section"
						}
					],
					selected: null,
					correct: null
				},
				{
					type: "text",
					text: "Where is Ethiopia located?",
					possibilities: [
						{
							answer: "Europe"
						},
						{
							answer: "Africa"
						},
						{
							answer: "South America"
						},
						{
							answer: "Asia"
						}
					],
					selected: null,
					correct: null
				},
				{
					type: "text",
					text: "Who made the sistine chapel?",
					possibilities: [
						{
							answer: "Raphael"
						},
						{
							answer: "Michaelangelo"
						},
						{
							answer: "Leonardo Da vinci"
						},
						{
							answer: "Vermeer"
						}
					],
					selected: null,
					correct: null
				}
		]

})();
