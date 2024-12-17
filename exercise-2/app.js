document.addEventListener("DOMContentLoaded", () => {
 let typingTimer;

 const typingDelay = 500;

 const inputField = document.getElementById("userInput");
 const text = document.getElementById("hintText")

 if (!inputField) {
   console.error("Input field not found");
   return;
 }

 inputField.focus();
 inputField.value = "";

 inputField.addEventListener("input", () => {
   clearTimeout(typingTimer);
   typingTimer = setTimeout(() => {
     const inputValue = inputField.value;
     if (inputValue) {
      text.style.color = inputValue.length > 30 ? "red" : ""; 
      text.innerText = `Length: ${inputValue.length}`;
     }
   }, typingDelay);
 });
});
