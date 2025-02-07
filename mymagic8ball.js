let user = prompt("Are you ready to play - type yes to start");

let answers = [
    "The weather today will be very sunny",
    "Wanna hear a joke - too bad",
    "This game is very fun",
    "I wonder what time it is",
    "Are you forgetting anything?",
    "Are you having a good day today?",
    "Man, am I bored"
];

// Corrected: Generate a random index between 0 and answers.length - 1
let randomize = Math.floor(Math.random() * answers.length);

// Get the random choice from the array
let randomChoice = answers[randomize];

// Check if the user typed "yes"
if (user.toLowerCase() === "yes") {
    console.log(randomChoice);
} else {
    console.log("You probably mistyped 'yes'. Please try again and only type 'yes'.");
}
