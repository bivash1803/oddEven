const numberInput = document.getElementById('numberInput');
const messageContainer = document.getElementById('messageContainer');

numberInput.addEventListener('input', handleInput);

function handleInput() {
  const inputValue = parseInt(numberInput.value);
  messageContainer.textContent = '';

  if (isNaN(inputValue)) {
    return;
  }

  if (inputValue < 0) {
    showMessage('Enter a positive value');
  } else if (inputValue % 2 === 0) {
    showNextEvenNumbers(inputValue);
  } else {
    showNextOddNumbers(inputValue);
  }
}

function showMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.classList.add('message');
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

function showNextEvenNumbers(number) {
  const nextEvenNumbers = [];
  for (let i = 1; i <= 3; i++) {
    nextEvenNumbers.push(number + 2 * i);
  }
  showMessage('Next 3 even numbers: ' + nextEvenNumbers.join(', '));
}

function showNextOddNumbers(number) {
  const nextOddNumbers = [];
  for (let i = 1; i <= 3; i++) {
    nextOddNumbers.push(number + 2 * i - 2);
  }
  showMessage('Next 3 odd numbers: ' + nextOddNumbers.join(', '));
}
