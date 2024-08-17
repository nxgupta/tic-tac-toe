let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = !!Math.random(); //playerX, playerY
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableButtons = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
  resetBtn.innerText = "New Game";
};

const enableButtons = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  resetBtn.innerText = "Reset";
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        disableButtons();
        setTimeout(() => alert(`Winner is ${val1}`, 0));
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "X" : "O";
    turnO = !turnO;
    box.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", enableButtons);
