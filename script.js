let count = 0;

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  if (count !== 0) {
    saveEl.textContent += `${count} - `;
    count = 0;
    countEl.textContent = 0;
  }
});
