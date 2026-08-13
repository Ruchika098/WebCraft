const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
  const colors = ["#dc2626", "#7c3aed", "#ea580c", "#0891b2", "#16a34a"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorButton.style.backgroundColor = randomColor;
});

document.getElementById("greetingButton").addEventListener("click", () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
});

document.getElementById("addButton").addEventListener("click", () => {
  const first = Number(document.getElementById("number1").value);
  const second = Number(document.getElementById("number2").value);
  const result = document.getElementById("result");

  if (Number.isNaN(first) || Number.isNaN(second)) {
    result.textContent = "Result: Please enter two numbers.";
    return;
  }

  result.textContent = `Result: ${first + second}`;
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();

  if (name) {
    alert(`Thank you, ${name}! Your form was submitted.`);
  }
});
