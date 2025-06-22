import promptSync from 'prompt-sync';    
const prompt = promptSync();             

let running = true;

function showMenu() {
  console.log("=== MENU ===");
  console.log("1. Greet");
  console.log("2. Programmer Joke");
  console.log("3. Show Time");
  console.log("4. Reverse a Word");
  console.log("5. Show Even/Odd from 1 to 10");
  console.log("6. Squares from 1 to 10");
  console.log("7. Repeat a Phrase");
  console.log("8. Convert Celsius to Fahrenheit");
  console.log("9. Countdown from a Number");
  console.log("10. Exit");
}

while (running) {
  showMenu();
  const choice = prompt("Enter your choice (1-10): ");

  switch (choice) {
    case "1":
      console.log("Hi friend!");
      break;

    case "2":
      console.log("Joke of the week: Why do programmers prefer dark mode?");
      console.log("Because the light attracts bugs!");
      break;

    case "3":
      const now = new Date();
      console.log("Current time is:", now.toLocaleTimeString());
      break;

    case "4":
      const word = prompt("Pick a word: ");
      const reversed = word.split("").reverse().join("");
      console.log("Reversed word is:", reversed);
      break;

    case "5":
      for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        } else {
          console.log(`${i} is odd`);
        }
      }
      break;

    case "6":
      for (let i = 1; i <= 10; i++) {
        console.log(`${i} squared is ${i ** 2}`);
      }
      break;

    case "7":
      const phrase = prompt("Enter a phrase: ");
      const times = parseInt(prompt("How many times to repeat it? "));
      if (isNaN(times) || times < 0) {
        console.log("Please enter a valid number.");
      } else {
        console.log(phrase.repeat(times));
      }
      break;

    case "8":
      const celsius = parseFloat(prompt("Enter Celsius value: "));
      if (isNaN(celsius)) {
        console.log("Invalid number.");
      } else {
        const fahrenheit = celsius * 1.8 + 32;
        console.log(`${celsius}°C is ${fahrenheit}°F`);
      }
      break;

    case "9":
      let num = parseInt(prompt("Enter a number to count down from: "));
      if (isNaN(num) || num < 0) {
        console.log("Please enter a non-negative number.");
      } else {
        while (num >= 0) {
          console.log(num);
          num--;
        }
      }
      break;

    case "10":
      console.log("Cheers! Have a good one!");
      running = false;
      break;

    default:
      console.log("Invalid choice. Please choose a number between 1 and 10.");
  }
}
