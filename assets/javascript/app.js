 //Defining area where questions/answers will be displayed and interacted with
var panel = $("#play-area");
//Click event to register a click on the start button
$(document).on("click", "#start", function (event) {
	game.start();
});
//Click event to register a click on the done button
$(document).on("click", "#done", function (event) {
	game.done();
});
//Questions and multiple choice answers/correct answer
var questions = [{
	question: "What does the word for 'hangover' directly translate to in Norwegian?",
	choices: ["Carpenters in the Head", "2", "3", "4"],
	correctAnswer: "Carpenters in the Head"
}, {
	question: "Who were the first female brewers?",
	choices: ["1", "Women", "3", "4"],
	correctAnswer: "Women"
}, {
	question: "What is the science of brewing beer called?",
	choices: ["1", "2", "Zymurgy", "4"],
	correctAnswer: "Zymurgy"
}, {
	question: "What is the oldest brewery in the world?",
	choices: ["1", "2", "3", "Benedictine Weihenstephan Abbey"],
	correctAnswer: "Benedictine Weihenstephan Abbey"
}, {
	question: "Beer is composed mostly of what?",
	choices: ["Water", "2", "3", "4"],
	correctAnswer: "Water"
}];
//Variables for the game (right/wrong/timer)
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,
	//Allows counter to count down
	countdown: function () {
		game.counter--;
		$("#counter-number").html(game.counter);
		//Prevents the counter from going past "0" and alerts the user that time is up, then calls the game's done function?
		if (game.counter === 0) {
			alert("TIME'S UP");
			//Calls the done function
			game.done();
		}
	},
	//Function for the start button
	start: function () {
		timer = setInterval(game.countdown, 1000); //starts timer
		$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>'); //text of timer countdown
		$("#start").remove(); //removes start button
		//Displays question and answers
		for (var i = 0; i < questions.length; i++) {
			//Displays the questions
			panel.append('<h2>' + questions[i].question + '</h2>');
			//Displays the answers
			for (var j = 0; j < questions[i].choices.length; j++) {
				panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
			}
		}
		//Displays the done button
		panel.append("<button id='done'>DONE</button>");
	},
	//Function for the done button
	done: function () {
		//increments right/wrong answers
		$.each($("input[name='question-0']:checked"), function () {
			if ($(this).val() == questions[0].correctAnswer) {
				console.log(this);
				game.correct++;
			}
			else {
				game.incorrect++;
			}
//----------------------------------------------------
		});
		$.each($("input[name='question-1']:checked"), function () {
			if ($(this).val() == questions[1].correctAnswer) {
				console.log(this);
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-2']:checked"), function () {
			if ($(this).val() == questions[2].correctAnswer) {
				console.log(this);
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-3']:checked"), function () {
			if ($(this).val() == questions[3].correctAnswer) {
				console.log(this);
				game.correct++;
			} else {
				game.incorrect++;
			}

		});
		$.each($("input[name='question-4']:checked"), function () {
			if ($(this).val() == questions[4].correctAnswer) {
				console.log(this);
				game.correct++;
			} else {
				game.incorrect++;
			}

		});

		this.results();
	},


	results: function () {
		clearInterval(timer);

		$("#subcontainer h2").remove();
		panel.html("<h2>You're Done!</h2>");
		panel.append("<h3>You got this many right: " + this.correct + "</h3>");
		panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
		panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

	}

};


//I'd like to randmize the answer
//I dont like that I have to remove the start button where i do (~line 60)
//What is the deal with the commas