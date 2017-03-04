
var options= [["p", "u", "f", "f", "d", "a", "d", "d", "y"] , 
["j", "a", "y", "z"], 
["f", "r", "e", "n", "c", "h", "m", "o", "n", "t", "a", "n", "a"], 
["r", "i", "c", "k", "r", "o","s", "s"], 
["k", "a", "n", "y", "e", "w", "e", "s","t"], 
["n", "i", "c", "k", "i", "m", "i", "n", "a", "j"], 
["e", "m", "i", "n", "e", "m"], 
["k", "e", "n", "d", "r", "i", "c", "k", "l", "a", "m", "a", "r"], 
["d", "r", "a", "k", "e",] 
["y", "o", "u", "n", "g", "j", "e", "e", "z", "y"], 
["n", "a", "s" ]];
var options

	
document.onkeyup = function() {
		//alert("working");
		var userguess = String.fromCharCode(event.keyCode).toLowerCase();
		
		//console.log(userguess);

		var chosen_word = options[Math.floor(Math.random()* options.length)];
		// console.log(computerGuess);



// the print underlines for every letter of the word
		var underlines = new Array(chosen_word.length);
// initializing the error to zero
		var error= 0;
// this loop loads the array with underlines and make a guessing field.
		for (var i = 0; i < underlines.length; i++)
		{
			underlines[i] = "_ ";
		}

// this print what the user have to guess for every spot for a word
		function printUnderlines(){
	for (var i = 0; i < underlines.length; i++)
	{

	//The getElementById() method returns the element that has the ID attribute with the specified value.
var thefield = document.getElementById("thefield");

// Create a text node in it is the underlines blank area
	var letter = document.createTextNode(underlines[i]);
// Append the text to <li>
	thefield.appendChild(letter);
	}

//checks if the letter provided by the user matches one or 
//more of the letters in the word
var match_check = function(){
	// it comes from the form of the html
	var f = document.my_form; 

//setting the letter we obtain from the user on the HTML
	var b = f.elements["input_letter"]; 
	//
	var user_letter = b.value; // the letter provided by the user
	user_letter = user_letter.toLowerCase();

	for (var i = 0; i < chosen_word.length; i++)
	{
		// if the letter chosen by the computer is the same letter as 
		// guessed by the user then we are adding empty space and get rid 
		// of the underlines.
		if(chosen_word[i] === user_letter)
		{
			underlines[i] = user_letter + " ";
			var result = true;
		}

	b.value = "";

	}

	

//deletes the guessfield and replaces it with the new one
// updating the guess field for the user
var thefield = document.getElementById("thefield");
	thefield.innerHTML=""; 
	printUnderlines();


	// if a guessed letter is not in the word, the letter will be put 
	// on the wrong letters-list and hangman grows
	if(!result)
	{
		var bad_letter = document.getElementById("bad_letter");

		var  letter = document.createTextNode(" " + user_letter);
 
		bad_letter.appendChild(letter); 

		error++;

		var hangman = document.getElementById("hangman");

		hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
	}

	//checks if all letters have been found
// initialized finshed to true
var finished = true;
// if there is an underlined empty space field then the game is not done
	for (var i = 0; i < underlines.length; i++)
	{
		if(underlines[i] === "_")
		{
			finished = false;
		}
	}
	// if there isn't an underlined guessed which is guessed wrong the game
	// is over the user wins.
	if(finished)
	{
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(error === 6)
	{
		// the window alerts you are dead once your errors are over 6;
		window.alert("Uh...I guess you're dead now.");
	}
}
function init(){
	printUnderlines();
}

};
