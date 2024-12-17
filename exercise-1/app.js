document.addEventListener("DOMContentLoaded", () => {
  let typingTimer;

  const typingDelay = 500;

  const inputField = document.getElementById("userInput");

  if (!inputField) {
    console.error("Input field not found");
    return;
  }

  inputField.focus();
  inputField.value = "";

  inputField.addEventListener("input", () => {
    clearTimeout(typingTimer);
    console.log("inputField.value", inputField.value);
    typingTimer = setTimeout(() => {
      const inputValue = inputField.value;
      if (inputValue) {
        alert(
          `مقدار وارد شده: "${inputValue}"\nطول رشته: ${inputValue.length}`
        );
      }
    }, typingDelay);
  });
});
