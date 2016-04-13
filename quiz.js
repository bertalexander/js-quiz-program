// variables
var correct = 0;

// prompt
var answer1 = prompt("What is Beyoncé's last name? (maiden)");
var answer2 = prompt("What girl group was Beyoncé the lead singer of?");
var answer3 = prompt("What was Beyoncé's first solo #1 single on the Billboard Hot 100?");
var answer4 = prompt("How many Grammy Awards does Beyoncé have to her name?");
var answer5 = prompt("What was the last film Beyoncé was casted in?");

console.log ( answer1 );
console.log ( answer2 );
console.log ( answer3 );
console.log ( answer4 );
console.log ( answer5 );




// if statement
if ( answer1.toUpperCase() === 'KNOWLES' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === "DESTINY'S CHILD" ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'CRAZY IN LOVE' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === '20' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'EPIC' ) {
 correct += 1;
}

console.log ( correct );

// output results
if ( correct === 5 ) {
document.write("<p>Congratulations, you got all 5 questions correct! Your song is Single Ladies (Put a Ring on It) [Beyoncé's 5th #1 Single]</p>");
}

if ( correct === 4 ) {
document.write("<p> You got 4 questions correct! Almost there! Your song is Irreplaceable (Beyoncé's 4th #1 Single) </p>");
}

if ( correct === 3 ) {
document.write("<p> You got 3 questions correct! Not too bad! Your song is Check on It (Beyoncé's 3rd #1 Single)</p>");
}

if ( correct === 2 ) {
document.write("<p>You got 2 questions correct! You could do better! Your song is Baby Boy (Beyoncé's 2nd #1 Single)</p>");
}

if ( correct === 1 ) {
document.write("<p>You got 1 question correct! You could do better! Your song is Crazy in Love (Beyoncé's 1st #1 Single)</p>");
}

if ( correct === 0 ) {
document.write("<p>You got 0 questions correct. What kind of Beyoncé fan are you?</p>");
}
