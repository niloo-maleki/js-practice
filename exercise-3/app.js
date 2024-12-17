const products = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Phone" },
  { id: 3, title: "Tablet" },
  { id: 4, title: "Smartwatch" },
  { id: 5, title: "Headphones" },
  { id: 6, title: "Keyboard" },
  { id: 7, title: "Mouse" },
];

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownList = document.getElementById("dropdownList");

  searchBox.value = "";

  let searchedData = [...products];

  const handlerClickInput =(()=>{
    if (!dropdownMenu.classList.contains("hidden")) return;
    dropdownMenu.classList.remove("hidden");
    renderDropdown(searchedData);
  })

  
  const handleInput = delay((e) => {
    const key = e.target.value.toLowerCase();
    
    filteredData = searchedData.filter((item) =>
      item.title.toLowerCase().includes(key)
  );
  
  renderDropdown(filteredData);
}, 500);

  searchBox.addEventListener("click", handlerClickInput);

  searchBox.addEventListener("input", handleInput);

  const renderListItem = (item) => {
    const li = document.createElement("li");
    li.textContent = item.title;

    li.addEventListener("click", () => {
      searchBox.value = item.title;
    });

    dropdownList.appendChild(li);
  };

  const renderDropdown = (data) => {
    dropdownList.innerHTML = "";

    if (data.length === 0) {
      dropdownList.innerHTML =
        '<li class="no-items">هیچ گزینه‌ای یافت نشد</li>';
      return;
    }

    data.forEach(renderListItem);
  };

  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
      hideDropdown();
    }
  });

  const hideDropdown = () => dropdownMenu.classList.add("hidden");

  const delay = (func, delay) => {
    let typingTimer;
    return (...args) => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => func(...args), delay);
    };
  };
});
