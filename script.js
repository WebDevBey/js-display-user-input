document
  .getElementById("displayButton")
  .addEventListener("click", displayInput);

function displayInput() {
  const userInputField = document.getElementById("userInput");
  const displayArea = document.getElementById("displayArea");
  const error = document.getElementById("error");

  const userInput = userInputField.value.trim();

  if (userInput === "") {
    error.innerText = "Please enter some text";
  } else {
    error.innerText = "";
    const newParagraph = document.createElement("p");
    newParagraph.innerText = userInput;
    displayArea.appendChild(newParagraph);
    userInputField.value = "";
  }
}
