function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    const resultElement = document.getElementById('palindromeResult');
    if (cleanedInput === reversedInput) {
        resultElement.textContent = `"${input}" is a palindrome!`;
    } else {
        resultElement.textContent = `"${input}" is not a palindrome.`;
    }
}

function updateUserInput() {
    const userInput = prompt("Please enter a value:");
    if (userInput) {
        console.log("User  input:", userInput); // Log to console
        alert("You entered: " + userInput); // Show alert
    } else {
        alert("No input provided.");
    }
}