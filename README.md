# Practice Exercises

## Exercise 1  
**Description:**  
On a web page, there is a `text` input field. When the user **stops typing** (after 500 milliseconds), an `alert` should display the input value and the length of the entered string. Ensure the alert is shown **only after typing stops**, not during typing.  

**Resources:**  
- [JavaScript Events ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) 

---

## Exercise 2  
**Description:**  
Similar to Exercise 1, but instead of showing an alert:  
- Display a **hint** below the input field indicating the string length.  
- If the string length exceeds **30 characters**:  
  - The text color of the hint and the input field's border should turn **red**.  

**Resources:**  
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)  
- [`element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  
- [`element.innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)  

---

## Exercise 3  
**Description:**  
Create an `input` field where the user can **search** for products. The product data should be fetched from an **array** or a **mock API** endpoint. Implement the following features:  
- After typing and a delay of 500 milliseconds, the product list should:  
  - Be **filtered** based on the search keyword.  
  - Be **sorted alphabetically**.  
- Display the filtered products in a **Dropdown Menu**.  
- If the input field is empty, display the entire product list.  
- The Dropdown Menu should close when clicking anywhere on the page (except for the dropdown itself or its items).  

**Resources:**  
- Array Methods: [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) , [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) , [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) , [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) , [`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) , [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  
