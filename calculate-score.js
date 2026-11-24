const marksInput = document.getElementById("marks");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const marks = Number(marksInput.value);

  if (marks < 0 || marks > 100 || marksInput.value === "") {
    result.textContent = "enter valid marks btwn 0-100";
  } else if (marks > 90) {
    result.textContent = "A Excellent";
  } else if (marks > 70) {
    result.textContent = "B Good";
  } else if (marks > 50) {
    result.textContent = "C Average";
  } else if (marks > 40) {
    result.textContent = "D needs improvement";
  } else {
    result.textContent = "E you need to study more";
  }
});

let name = "Emoji";
console.log("welcome, " + name);
