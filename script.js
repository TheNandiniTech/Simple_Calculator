let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/%/g, '/100'));
  } catch (e) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
