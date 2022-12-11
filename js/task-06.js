const textInput = document.querySelector("#validation-input");
console.log(textInput.getAttribute("data-length"));
const textInputAdd = Number(textInput.getAttribute("data-length"));
console.log(textInputAdd);
textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === textInputAdd) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
    textInput.classList.add("invalid");
  }
});
