// ================================
// Part 1: Variables and Conditionals
// ================================

const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = Number(document.getElementById("ageInput").value);

  // Conditional logic
  if (age >= 18) {
    ageResult.textContent = "You are an adult.";
  } else if (age > 0) {
    ageResult.textContent = "You are a minor.";
  } else {
    ageResult.textContent = "Please enter a valid age.";
  }
});

// ================================
// Part 2: Functions
// ================================

// Function to calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

// Function to format a number as currency
function formatCurrency(num) {
  return "$" + num.toFixed(2);
}

const calcBtn = document.getElementById("calcBtn");
const totalResult = document.getElementById("totalResult");

calcBtn.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  const total = calculateTotal(num1, num2);
  totalResult.textContent = `Total: ${formatCurrency(total)}`;
});

// ================================
// Part 3: Loops
// ================================

const showNumbersBtn = document.getElementById("showNumbersBtn");
const numbersList = document.getElementById("numbersList");

showNumbersBtn.addEventListener("click", () => {
  numbersList.innerHTML = ""; // Clear list first

  // For loop example
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    numbersList.appendChild(li);
  }

  // While loop example (logging in console)
  let count = 1;
  while (count <= 5) {
    console.log(`While loop count: ${count}`);
    count++;
  }
});

// ================================
// Part 4: DOM Manipulation
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const changeTextBtn = document.getElementById("changeTextBtn");
  const toggleColorBtn = document.getElementById("toggleColorBtn");
  const dynamicDivContainer = document.getElementById("dynamicDivContainer");
  const header = document.querySelector("h1");

  changeTextBtn.addEventListener("click", () => {
    header.textContent = "Header Text Changed!";
  });

  toggleColorBtn.addEventListener("click", () => {
    document.body.classList.toggle("highlight");
  });

  // Dynamically create elements
  for (let i = 1; i <= 3; i++) {
    const div = document.createElement("div");
    div.textContent = `Dynamic Div ${i}`;
    dynamicDivContainer.appendChild(div);
  }
});
